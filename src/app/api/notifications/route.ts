import { createClient } from "@/lib/db";

export async function GET() {
  const client = await createClient();

  const response = await client.from("notification_subscriptions").select();

  return Response.json({ subscriptions: response.data });
}
