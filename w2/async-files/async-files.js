import fs from "fs/promises"

// fs.writeFile("input.txt", "hello world", 'utf-8', (err) => {
//     if(err){
//         console.log(err)
//     }
//     else{console.log("good")}
// })


// fs.readFile('input.txt', 'utf-8', (err, data) => {
//     if(err) console.log(err)
//         const upper = data.toUpperCase()
//         fs.writeFile('output-upper.txt', upper, 'utf-8', (err, res) => {
//             if(err) console.log(err)
//                 console.log("all good")
//         })
// })

// fs.readFile('input.txt', 'utf-8')
// .then(res => console.log(res))
// .catch(rej => console.error(err))
// .finally(() =>console.log("end"))

// fs.readFile('input.txt', 'utf-8')
// .then((res) => res.toLowerCase())
// .then((res) => fs.writeFile('output-upper.txt', res, 'utf-8'))
// .then((upper) => fs.readFile('output-upper.txt', 'utf-8'))
// .then((upperRes) => console.log(upperRes))
// .catch(console.error())
// .finally(() => console.log("end"))

//שאלות הבנה

//1

//fs.readFile - זה קריאה רגילה של קובץ ע"י fs
//fsPromises.readFile -- זה כבר הפעלה של promiese

//2

//זה עובד בצורה של שרשרת וגם פעולה - לרוב - צריך להעביר מידע ונוצר סיבוך 

//3

//יותר מובן ונראה יותר מסודר עין

//4

//בעיה קריטית. לא יחזור שום מידע לאובייקט







