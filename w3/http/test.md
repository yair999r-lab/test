# Exercise: Simple CRUD API (45–60 min)

## Goal

Build a small **in-memory CRUD API** using Node.js and the built-in `http` module.

You will manage a list of **movies**. All operations happen on **one route only**: `/movies`.

---

## What you are building


| Method   | Route     | What it does                         |
| -------- | --------- | ------------------------------------ |
| `GET`    | `/movies` | Return all movies                    |
| `POST`   | `/movies` | Create a new movie (from body)       |
| `PUT`    | `/movies` | Update an existing movie (from body) |
| `DELETE` | `/movies` | Delete a movie (from body)           |


Each movie looks like this:

```json
{
  "id": 1,
  "title": "Inception",
  "director": "Christopher Nolan"
}
```

Store movies in a simple array in memory:

```js
let movies = [];
let nextId = 1;
```

When the server restarts, the data is gone. That is fine for this exercise.

---

## Starter file

Create a file called `movies_crud.js` and start from this skeleton:

```js
import http from "http";

let movies = [];
let nextId = 1;

const server = http.createServer((req, res) => {
  // your code here
});
```

---

### Step 1 — Basic routing

- Listen on port `3000`
- If `req.url === "/movies"`, handle the request
- For any other URL, respond with status `404` and a short message
- For `/movies` with an unsupported method, respond with status `405` and `"Method Not Allowed"`

**Tip:** Always set JSON responses with:

```js
res.setHeader("Content-Type", "application/json");
```

---

### Step 2 — GET all movies

When `req.method === "GET"` and `req.url === "/movies"`:

- Respond with status `200`
- Send the `movies` array as JSON

**Test:**

```bash
curl http://localhost:3000/movies
```

Expected: `[]`

---

### Step 3 — POST create a movie

When `req.method === "POST"`:

1. Read the request body (chunks + `req.on("end", ...)`)
2. Parse it with `JSON.parse(body)`
3. Expect body like: `{ "title": "...", "director": "..." }`
4. Create a new movie:
  - `id` = `nextId`, then increment `nextId`
  - `title` and `director` from the body
5. Push it into `movies`
6. Respond with status `201` and the new movie as JSON

**Test:**

```bash
curl -X POST http://localhost:3000/movies \
  -H "Content-Type: application/json" \
  -d '{"title":"Inception","director":"Christopher Nolan"}'
```

Then run GET again — you should see one movie.

---

### Step 4 — PUT update a movie

When `req.method === "PUT"`:

1. Read and parse the body
2. Expect body like: `{ "id": 1, "title": "...", "director": "..." }`
3. Find the movie in `movies` where `movie.id === body.id`
4. If not found → status `404` and `{ "error": "Movie not found" }`
5. If found → update `title` and `director`, respond with status `200` and the updated movie

**Test:**

```bash
curl -X PUT http://localhost:3000/movies \
  -H "Content-Type: application/json" \
  -d '{"id":1,"title":"Inception (updated)","director":"Christopher Nolan"}'
```

---

### Step 5 — DELETE a movie

When `req.method === "DELETE"`:

1. Read and parse the body
2. Expect body like: `{ "id": 1 }`
3. Find the movie by `id`
4. If not found → status `404`
5. If found → remove it from `movies`, respond with status `200` and `{ "message": "Movie deleted" }`

**Test:**

```bash
curl -X DELETE http://localhost:3000/movies \
  -H "Content-Type: application/json" \
  -d '{"id":1}'
```

GET again — the list should be empty.

---

## Bonus

Pick **one** of these:

1. **Validation** — if `title` or `director` is missing on POST/PUT, return status `400` with an error message
2. **Pretty logging** — `console.log` each request: method, url, and status code you sent back
3. **Client script** — write a small `fetch` script that runs the full flow: create → get all → update → delete → get all

---

## How to know you are done

You can run this full flow without errors:

```bash
# 1. create two movies
curl -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d '{"title":"Inception","director":"Christopher Nolan"}'
curl -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d '{"title":"The Matrix","director":"The Wachowskis"}'

# 2. get all
curl http://localhost:3000/movies

# 3. update movie 1
curl -X PUT http://localhost:3000/movies -H "Content-Type: application/json" -d '{"id":1,"title":"Inception (edited)","director":"Christopher Nolan"}'

# 4. delete movie 2
curl -X DELETE http://localhost:3000/movies -H "Content-Type: application/json" -d '{"id":2}'

# 5. get all — only movie 1 should remain
curl http://localhost:3000/movies
```

---

## Hints

How do I read the request body?

```js
let body = "";
req.on("data", (chunk) => {
  body += chunk;
});
req.on("end", () => {
  const data = JSON.parse(body);
  // use data here
});
```

For GET you do not need to read a body.
המערכת מציגה את crud_exercise.md.