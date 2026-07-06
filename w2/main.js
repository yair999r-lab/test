// import fs from "fs";
// import input from "analiza-sync";

// // new Promise((res, rej) =>{
// //     res(5)
// // }).then(data => console.log(data))

// const writefile = (path, data) => new Promise((res, rej) => {
//     fs.writeFile(path, data,'utf8', (err, data1) => {
//         if(err) rej (err)
//         res(path)
//     })
// })


// const readfile = (path) => new Promise((res, rej) => {
//     fs.readFile(path, 'utf-8', (err, data) => {
//         if(err) rej(err);
//         res(data)
//     })
// })

// writefile('text.txt', "wwwww")
//     .then(res => readfile(res))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


