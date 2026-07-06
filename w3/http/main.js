import http from "http";

//1-2

// const server = http.createServer((req, res) => {
// if (req.url === "/") {
//   res.end("home page");
// } else if (req.url === "/about") {
//   res.end("adout page");
// } else if (req.url === "/content") {
//   res.end("contact page");
// } else {
//   res.statusCod = 404;
//   res.end(res.statusCod + " Page Not Found");
// }})

// server.listen(3000, () => {
//   console.log("server run");
// });


//3

// const server = http.createServer((req, res) => {
//     if(req.url === "/users" && req.method === "POST"){
//         res.end("User created")
//     }else if(req.url === "/users" && req.method === "GET"){
//         res.end("Users list")
//     }else if(req.url === "/users"){
//         res.end("Method Not Allowed")
//     }else{
//         res.statusCode = 404
//         res.end("bad req " + res.statusCode)
//     }
// })





server.listen(3000, () => {
  console.log("server run");
});

