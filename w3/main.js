import http from "http";
import { URL, URLSearchParams } from "url";

const server = http.createServer();

server.on("request", (req, res) => {
  const { method } = req;
  const [url, queryString] = req.url.split("?");
  const query = new URLSearchParams("?" + queryString);

  const parasUrl = req.url.split("/");

  const pathParam = parasUrl.pop();

  if (method === "GET" && parasUrl.join("/") === "/user") {
    res.end(
      JSON.stringify({
        id: pathParam,
        userName: "ddsdf",
      }),
    );
  }

  if (method === "GET" && url === "/") {
    res.end(JSON.stringify({ msg: `hello ${query.get("name")}` }));
  }

  if (method === "POST") {
    let body = " ";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      req.body = JSON.parse(body)
    })
  }
});

server.listen(3000, () => {
  console.log("hello");
});
