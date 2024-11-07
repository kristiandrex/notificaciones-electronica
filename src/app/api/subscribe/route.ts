import { createClient } from "@/lib/db";

export async function POST(request: Request) {
  const subscription = await request.json();
  const client = await createClient();

  await client.from("notification_subscriptions").insert([subscription]);

  return Response.json({ success: true });
}
