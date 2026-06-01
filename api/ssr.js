import server from "./gforce-elite-forge-main/dist/server/server.js";

function getRequestUrl(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host || "localhost";
  return `${proto}://${host}${req.url}`;
}

function createHeaders(req) {
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value == null || key.toLowerCase() === "host") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(key, item);
      }
    } else {
      headers.set(key, value);
    }
  }
  return headers;
}

export default async function handler(req, res) {
  const request = new Request(getRequestUrl(req), {
    method: req.method,
    headers: createHeaders(req),
    body: ["GET", "HEAD"].includes(req.method) ? undefined : req,
  });

  const response = await server.fetch(request);
  res.statusCode = response.status;

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === "transfer-encoding") return;
    res.setHeader(key, value);
  });

  const arrayBuffer = await response.arrayBuffer();
  if (arrayBuffer.byteLength > 0) {
    res.end(Buffer.from(arrayBuffer));
  } else {
    res.end();
  }
}
