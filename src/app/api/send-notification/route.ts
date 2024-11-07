import { createClient } from "@/lib/db";
import webpush from "web-push";

export async function POST() {
  const client = await createClient();
  const response = await client.from("notification_subscriptions").select();

  const subscriptions = response.data ?? [];

  webpush.setVapidDetails(
    "mailto:cristianandrestmer@ufps.edu.co",
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
  );

  for (const subscription of subscriptions) {
    await webpush.sendNotification(subscription);
  }

  return Response.json({ success: true });
}
