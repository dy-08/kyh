import { supabase } from "../lib/supabase";

export async function listGuestbook() {
  const { data, error } = await supabase
    .from("guestbook_entries")
    .select("id,name,message,created_at")
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) throw error;
  return data ?? [];
}

export async function createGuestbookEntry({ name, message }) {
  const payload = {
    name: (name || "").trim() || null,
    message: (message || "").trim(),
  };

  const { error } = await supabase.from("guestbook_entries").insert(payload);
  if (error) throw error;
}
