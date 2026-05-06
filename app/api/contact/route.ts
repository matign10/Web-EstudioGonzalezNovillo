import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, consulta } = body;

    // Validar datos requeridos
    if (!nombre || !email || !consulta) {
      return NextResponse.json(
        { error: "Faltan datos requeridos" },
        { status: 400 }
      );
    }

    // Insertar en Supabase
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          nombre,
          email,
          telefono: telefono || null,
          consulta,
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
    try {
      const emailBody = `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ""}
        <p><strong>Consulta:</strong></p>
        <p>${consulta.replace(/\n/g, "<br>")}</p>
      `;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "matias.gonzalez.novillo@gmail.com",
          subject: `Nuevo mensaje de contacto de ${nombre}`,
          html: emailBody,
          reply_to: email,
        }),
      });

      if (!response.ok) {
        console.error("Resend error:", await response.text());
        // No devolvemos error aquí porque el formulario se guardó en Supabase
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // No devolvemos error aquí porque el formulario se guardó en Supabase
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
