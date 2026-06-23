// # Array Methods – תרגילים

// ---

// ## חלק א' – map / filter
// ### תרגיל 2
// המר את כל המחרוזות לאותיות גדולות:

// const list = ["hello", "world"]

// const upeer = list.map(word => word.toUpperCase())
// console.log(upeer);

// ### תרגיל 4

// סנן רק מספרים זוגיים מתוך:

// const arr = [1, 2, 3, 4, 5, 6]

// const evens = arr.filter(num => num % 2 === 0)
// console.log(evens);

// ### תרגיל 8

// שלב `filter` + `map`:

// סנן רק מחירים מעל 100 ואז החזר אותם עם תוספת של 10%.

// const arr = [23,44,555,767,33]

// const upArr = arr.filter(num => num > 100).map(num => num + num / 10)
// console.log(upArr);

// ## חלק ב' – reduce

// ### תרגיל 10

// חשב מכפלה של כל המספרים במערך.

// const arr = [10, 10, 5]

// const mult = arr.reduce((a, b) => {return a * b})
// console.log(mult);

// ### תרגיל 12

// יש מערך משתמשים עם גילאים — חשב ממוצע גילאים.

// const arr = { yair: 27, bob: 333, dad: 10 };

// const values = Object.values(arr)

// const evrage =
//   values.reduce((a, b) => a + b, 0) / values.length;
// console.log(evrage);

// ### תרגיל 25

// מיין מערך מספרים בסדר **יורד**.

// const arr = [1,2,3,5554,5,6,7,8]

// arr.sort((a, b) => b - a)

// console.log(arr);

// ### תרגיל 29

// הסר 2 איברים החל מאינדקס 1.

// const arr =[1,2,3,4,5]

// arr.splice(1)

// console.log(arr);

// ### תרגיל 32

// שטח מערך מקונן ברמה אחת.

// const arr = [[1,2], [2,3]]
// console.log(arr.flat())

// ### תרגיל 36

// יש מערך מספרים — בצע chain אחד:

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const newArr = arr
//   .filter((num) => num % 2 === 0)
//   .reduce((a, b) => a + b * 2, 0);
// console.log(newArr);

// - סנן רק זוגיים
// - הכפל ב-2
// - חשב סכום

// ## תרגילי חשיבה

// ---

// ### תרגיל 38 – groupBy

// ממש `groupBy` באמצעות `reduce`.

// קלט:

// const arr = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];

// const group = arr.reduce((acc, item) => {
//   const key = item.type;
//   if (!acc[key]) {
//     acc[key] = [];
//   }
//   acc[key].push(item);
//   return acc;
// }, {});

// console.log(group);

// ```

// <div dir="rtl">

// פלט:

// </div>

// ```javascript
// {
//   fruit: [...],
//   veg: [...]
// }
// ```

// ---

// <div dir="rtl">

// ### תרגיל 39 – כפילויות (ללא Set)

// מצא האם יש כפילויות במערך — **ללא שימוש ב-Set**.


// const arr = [1,2,3,4]
// const newArr = []

// function doplict(){
// for(const num of arr){
//     if(num in newArr){
//         return false
//     }{newArr.push(num)}
// }return newArr}

// console.log(doplict())
// ---

// ## תרגיל מסכם (חובה)

// ### תרגיל 41 – מערכת מוצרים

// const products = [
//   { name: "Laptop", price: 800, inStock: true,  category: "tech"    },
//   { name: "Phone",  price: 400, inStock: true, category: "tech"    },
//   { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" }
// ];
// // ```

// const orderProducts = products.
//     filter(item => item.inStock === true).
//     filter(item => item.price > 100).
//     sort((a, b) => a.price - b.price).
//     map(item => item.name).
//     join(", ")

// console.log(orderProducts);

// <div dir="rtl">

// בצע הכל ב-chain אחד:

// 1. סנן רק מוצרים במלאי
// 2. סנן רק מוצרים מעל 100
// 3. מיין לפי מחיר
// 4. החזר רק שמות
// 5. חבר למחרוזת אחת

