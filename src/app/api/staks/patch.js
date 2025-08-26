/**
 * PATCH /api/tasks/patch
 * Updates an existing task in the "tasks" table.
 * Expects "id" and the fields to update ("title" and/or "is_complete") in the request body.
 * Returns the updated task as JSON.
 */

import { supabase } from '@/lib/supabaseClient'

export default async function handler(req, res) {
  const { id, title, is_complete } = req.body
  const { data, error } = await supabase.from('tasks').update({ title, is_complete }).eq('id', id)
  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json(data)
}
