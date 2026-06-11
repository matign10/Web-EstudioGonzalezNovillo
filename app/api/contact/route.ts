import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

// Límites de longitud para evitar abusos
const MAX_LENGTHS = {
  nombre: 200,
  email: 320,
  telefono: 50,
  consulta: 5000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escapa caracteres especiales de HTML para prevenir inyección en el email
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, consulta, website } = body;

    // Honeypot anti-spam: los bots completan este campo oculto.
    // Respondemos 200 para no darles señal de rechazo.
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validar datos requeridos y tipos
    if (
      typeof nombre !== "string" || !nombre.trim() ||
      typeof email !== "string" || !email.trim() ||
      typeof consulta !== "string" || !consulta.trim()
    ) {
      return NextResponse.json(
        { error: "Faltan datos requeridos" },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "El email no tiene un formato válido" },
        { status: 400 }
      );
    }

    if (
      nombre.length > MAX_LENGTHS.nombre ||
      email.length > MAX_LENGTHS.email ||
      (typeof telefono === "string" && telefono.length > MAX_LENGTHS.telefono) ||
      consulta.length > MAX_LENGTHS.consulta
    ) {
      return NextResponse.json(
        { error: "Uno de los campos excede la longitud máxima permitida" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      console.error("Missing Supabase environment variables");
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    const cleanNombre = nombre.trim();
    const cleanEmail = email.trim();
    const cleanTelefono = typeof telefono === "string" ? telefono.trim() : "";
    const cleanConsulta = consulta.trim();

    // Insertar en Supabase
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          nombre: cleanNombre,
          email: cleanEmail,
          telefono: cleanTelefono || null,
          consulta: cleanConsulta,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Error al guardar el formulario" },
        { status: 500 }
      );
    }

    // Enviar email al estudio usando Resend
    const submissionId = data?.[0]?.id;
    let emailSent = false;
    let emailError: string | null = null;

    try {
      const emailBody = `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(cleanNombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        ${cleanTelefono ? `<p><strong>Teléfono:</strong> ${escapeHtml(cleanTelefono)}</p>` : ""}
        <p><strong>Consulta:</strong></p>
        <p>${escapeHtml(cleanConsulta).replace(/\n/g, "<br>")}</p>
      `;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "onboarding@resend.dev",
          to: "estudio@gonzaleznovilloabogados.com",
          subject: `Nuevo mensaje de contacto de ${cleanNombre}`,
          html: emailBody,
          reply_to: cleanEmail,
        }),
      });

      if (response.ok) {
        emailSent = true;
      } else {
        emailError = await response.text();
        console.error("Resend error:", emailError);
      }
    } catch (err) {
      emailError = err instanceof Error ? err.message : "Error desconocido";
      console.error("Email sending error:", emailError);
    }

    // Actualizar el registro con el estado del email
    if (submissionId) {
      await supabase
        .from("contact_submissions")
        .update({ email_sent: emailSent, email_error: emailError })
        .eq("id", submissionId);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Formulario enviado correctamente",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Error procesando el formulario" },
      { status: 500 }
    );
  }
}
