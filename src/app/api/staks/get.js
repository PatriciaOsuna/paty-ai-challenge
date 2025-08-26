/**
 * GET /api/tasks/get
 * Fetches all tasks from the "tasks" table in Supabase.
 * Returns a JSON array of tasks.
 */

import { supabase } from '@/lib/supabaseClient'

export default async function handler(req, res) {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json(data)
}
