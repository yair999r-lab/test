import fs from "fs";

// fs.writeFile('data/log.txt', "log started", 'utf-8', (arr, data) => {
//     if(arr) return console.log(arr);
//     return console.log('File was created successfully');

// })

// // function readTextFile(filePath, callback) {
// //   fs.readFile(filePath, "utf-8", (arr, data) => {
// //     if (arr) callback("Error: ", arr);
// //     else callback(null ,data);
// //   });
// // }

// fs.appendFile('data/log.txt', "\nfirst atcion completed ", 'utf-8', (arr) => {
//     if(arr) return console.log(arr);
//     return console.log("add");
// })
// fs.appendFile('data/log.txt', "\nsecond atcion completed ", 'utf-8', (arr) => {
//     if(arr) return console.log(arr);
//     return console.log("add");
// })

// fs.readFile("data/log.txt", 'utf-8', (arr, data) => {
//     if(arr) return console.log("faild");
//     return console.log(data);

// })

// fs.mkdir('data/users',{ recursive: true }, (arr, data)=> {
//     if(arr) return console.log("faild");
//     return console.log("Users folder created");

// })

// fs.exists('data/users', (exists) => {
//     if (exists){fs.writeFile('data/users/uesr1.txt', "ff: ff\nname: da\nage: 25" , 'utf-8', (arr) => {
//     if(arr) return console.log(arr);
//     return console.log("add");})}
// })

// fs.readdir('data', 'utf-8', (err, files) =>{
//     if(err) return console.log(err);
//     return console.log(files);
// })

// fs.writeFile('data/step1.txt', "Step 1 completed", 'utf8', (err) => {
//     if(err) return console.log(err);
//  fs.writeFile('data/step2.txt', "Step 2 completed", 'utf8', (err)=> {
//     if(err) return console.log(err);
// fs.writeFile('data/step3.txt', "Step 3 completed", 'utf8', (err) => {
//     if(err) return console.log(err);
//     console.log("All steps completed");

// })})})

// fs.readFile('data/step1.txt', 'utf8', (err, data1) => {
//     if(err) return console.log(err);
// fs.readFile('data/step2.txt', 'utf8', (err, data2)=> {
//     if(err) return console.log(err);
// fs.readFile('data/step3.txt', 'utf8', (err, data3) => {
//     if(err) return console.log(err);
//     console.log(`${data1}\n${data2}\n${data3}`);
// })})})

// fs.writeFile("data/report-title.txt", "Daily Report ", "utf-8", (err) => {
//   if (err) return console.log(err);
//   fs.writeFile(
//     "data/report-body.txt",
//     "Everything is working" ,
//     "utf-8",
//     (err) => {
//       if (err) return console.log(err);
//       console.log("create !!");
//       fs.readFile("data/report-title.txt", "utf8", (err, data1) => {
//         if (err) return console.log(err);
//         fs.readFile("data/report-body.txt", "utf8", (err, data2) => {
//           if (err) return console.log(err);
//           fs.writeFile('data/final-report.txt', `${data1}\n${data2}`, 'utf-8', (err)=> {
//             if (err) return console.log(err);
//             console.log("all good");
            
//           })

//         });
//       });
//     },
//   );
// });




fs.writeFile('data/original.txt', 'Original file content' , 'utf-8', (err)=> {
    if(err) return console.log(err);
    fs.readFile('data/original.txt', 'utf-8', (err, myData) => {
        if(err) return console.log(err);
        fs.writeFile('data/copy.txt', myData, 'utf-8', (err)=> {
            if(err) return console.log(err);
            fs.readFile('data/copy.txt', 'utf8', (err)=> {
               if(err) return console.log(err);
            })
        })
    })
})


