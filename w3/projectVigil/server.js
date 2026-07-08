import http from "http";
import { readFiles } from "./fileandler.js";
import routes from "./routes.js";
import { extractRouteInfo, parseRequestBody } from "./servics.js";
import { error } from "console";

const server = http.createServer();

server.on("request", async (req, res) => {
  const method = req.method;
  if (!routes[method]) {
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: `Method ${method} Not Allowed` }));
    return;
  }
  const { fullUrl, dynamicRouteKey, param, query } = extractRouteInfo(req);

  res.setHeader("Content-Type", "application/json; charset=utf-8");

  console.log(req.method)
  req.query = query;
  req.params = {};

  try {
    console.log("111111")
    req.body = await parseRequestBody(req);
  } catch (err) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "invalid pormet!!" }));
    return;
  }
  console.log(req.method)
  if (routes[method][fullUrl]) {
    
    return routes[method][fullUrl](req, res);
  }

  if (dynamicRouteKey && routes[method][dynamicRouteKey]) {
    console.log(dynamicRouteKey)
    req.params.id = param;
    return routes[method][dynamicRouteKey](req, res);
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "route not found" }));
});

server.listen(3000, () => {
  console.log("run");
});
