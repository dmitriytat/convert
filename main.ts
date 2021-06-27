addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello! This is future convertation service", {
      status: 200,
      headers: { "content-type": "text/plain" },
    }),
  );
});
