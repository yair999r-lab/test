import http from "http";

let movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
  },
];
let nextId = 1;

const server = http.createServer((req, res) => {
  if (req.url === "/movies") {
    switch (req.method) {
      case "GET":
        res.writeHead(200, {
          "Content-type": "application/json; charset=utf-8",
        });
        res.end(JSON.stringify(movies));
        break;
      case "POST":
        let body = "";

        req.on("data", (chunk) => {
          body += chunk;
        });
        req.on("end", () => {
          const newMovie = JSON.parse(body);
          newMovie['id'] = nextId
          nextId++

          movies.push(newMovie);
          res.writeHead(201, {
            "Content-Type": "application/json; charset=utf-8",
          });
          res.end(JSON.stringify({ message: `movie edd the movie id is ${newMovie.id}`}));
        });
    }
  }
});

server.listen(3000, () => {
  console.log("server is runnig");
});
