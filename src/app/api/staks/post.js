/**
 * POST /api/tasks/post
 * Adds a new task to the "tasks" table in Supabase.
 * Expects "title" and optional "user_email" in the request body.
 * Returns the newly created task as JSON.
 */

import { supabase } from '@/lib/supabaseClient'

export default async function handler(req, res) {
  const { title, user_email } = req.body
  const { data, error } = await supabase.from('tasks').insert([{ title, user_email }])
  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json(data)
}
