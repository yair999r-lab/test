import { error } from "console";
import fs from "fs/promises";

//1

// function writefile(path, text) {
//   return new Promise((res, rej) => {
//     fs.writeFile(path, text, "utf-8", (err) => {
//       if (err) rej(err);
//       res(text);
//     });
//   });
// }

// writefile("data/message.txt", "yair")
//   .then((res) => (console.log(res), res + " hello"))
//   .then(console.log)
//   .catch((rej) => console.error(rej))
//   .finally(() => console.log("end"));

//2

// function readFileAsPromise(filePath) {
//   return new Promise((res, rej) => {
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) rej(err);
//      res(data)
//     });
//   });
// }
// readFileAsPromise("data/messdage.txt")
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.log("======= end ======="))

//3

// function readFileAsPromise(filePath) {
//   return new Promise((res, rej) => {
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) return rej(err);
//       res(data.length);
//     });
//   });
// }
// readFileAsPromise("data/messdage.txt")
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.log("======= end ======="));

//4

// function appendFileAsPromise(filePath, content){
//     return new Promise ((res, rej) => {
//         fs.writeFile(filePath, content, 'utf-8', (err) => {
//             if(err) rej(err)
//             res(content)
//         })
//     })
// }

// appendFileAsPromise('data/stap1.txt', "stap1")
//     .then(() => (console.log("stap1 done"), appendFileAsPromise('data/stap2.txt', 'stap2')))
//     .then(() => (console.log("stap2 done"), appendFileAsPromise('data/stap3.txt', 'stap3')))
//     .then(() => console.log("stap3 done"))
//     .catch(console.error)
//     .finally(() => console.log("=== end==="))

//5

function readFileAsPromise(filePath) {
  return new Promise((res, rej) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) rej(err);
      res(data);
    });
  });
}

Promise.all([
    readFileAsPromise("data/stap1.txt"),
    readFileAsPromise("data/stap2.txt"),
    readFileAsPromise("data/stap3.txt")
]).then(([d1,d2,d3]) => {
    console.log(d1)
    console.log(d2)
    console.log(d3)
}).catch(console.error)



//6

// function writefile(path, text) {
//   return new Promise((res, rej) => {
//     fs.writeFile(path, text, "utf-8", (err) => {
//       if (err) rej(err);
//       res(text);
//     });
//   });
// }

// function readFileAsPromise(filePath) {
//   return new Promise((res, rej) => {
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) rej(err);
//       res(data);
//     });
//   });
// }

// writefile("data/report-title.txt", "Daily Report")
//   .then(() => writefile("data/report-body.txt", "Everything is working"))
//   .then((data) =>
//     readFileAsPromise("data/report-title.txt").then((data2) =>
//       readFileAsPromise("data/report-body.txt").then(
//         (allData) => data2 + ": " + data,
//       ),
//     ),
//   )
//   .then((res) => writefile("data/final-report.txt", res))
//   .then(console.log);

//8

fs.readFile("data/stap1.txt", "utf-8")
  .then((data) =>
    fs
      .readFile("data/stap2.txt", "utf-8")
      .then((data2) =>
        fs
          .readFile("data/stap3.txt", "utf-8")
          .then((data3) => [data, data2, data3]),
      ),
  )
  .then((result) => console.log(...result));




