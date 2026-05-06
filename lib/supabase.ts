import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
