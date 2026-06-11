import { createClient, SupabaseClient } from '@supabase/supabase-js'

let client: SupabaseClient | null = null

// Cliente perezoso: evita que el build/prerender falle si faltan las env vars.
// Devuelve null cuando no hay configuración (los componentes usan datos de fallback).
export function getSupabase(): SupabaseClient | null {
  if (client) return client

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  client = createClient(supabaseUrl, supabaseAnonKey)
  return client
}

// Types for database tables
export interface ContactSubmission {
  id?: string
  nombre: string
  email: string
  telefono?: string
  consulta: string
  created_at?: string
  read?: boolean
}

export interface Caso {
  id: string
  titulo: string
  descripcion?: string
  tipo_resolucion: string
  tribunal?: string
  fecha?: string
  pdf_url?: string
  pdf_filename?: string
  visible: boolean
  created_at: string
  updated_at: string
}
