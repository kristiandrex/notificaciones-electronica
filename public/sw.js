self.addEventListener("push", function (event) {
  const options = {
    body: "Se detectó movimiento en tu casa",
  };

  event.waitUntil(
    self.registration.showNotification("Sensor de movimiento", options)
  );
});

self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received.");
  event.notification.close();
  event.waitUntil(clients.openWindow("https://localhost:3000"));
});
