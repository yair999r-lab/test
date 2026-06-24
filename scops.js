// # Functions & Scope 2 – תרגילים

// ---

// ## תרגילים בסיסיים

// ---

// ### תרגיל 1

// כתוב פונקציה שמקבלת מספר ומחזירה את המספר **כפול 3**.

// const mult = (num) => num * 3

// console.log(mult(3))
// ---

// ### תרגיל 2

// כתוב פונקציה שמקבלת מחרוזת ומחזירה את **האורך** שלה.

// const findlenght = (str) => str.length
// console.log(findlenght("abcad"))

// ---

// ### תרגיל 3

// כתוב פונקציה שמקבלת מספר ומחזירה אם הוא **חיובי / שלילי / אפס**.

// function findSize(number) {
//   if (number > 0) {
//     return "חיובי";
//   } else if (number < 0) {
//     return "שלילי";
//   } else {
//     return "אפס";
//   }
// }

// console.log(findSize(-80));
// ---

// ### תרגיל 4

// כתוב פונקציה שמקבלת שני מספרים ומחזירה את **הגדול** מביניהם.

// ---

// const findBig = (num1, num2) => Math.max(num1, num2)

// console.log(findBig(22,3))

// ### תרגיל 5

// כתוב פונקציה שמקבלת מערך ומחזירה את **מספר האיברים** בו.
// const len = (arr) => arr.length;
// console.log(len([1, 2, 3, 4, 5]));

// ---

// ## תרגילים – Scope והבנה

// ---

// ### תרגיל 6

// מה יודפס? הסבר למה.

// </div>

// ```javascript
// let a = 3;

// function test() {
//   a = 7;
// }

// test();
// console.log(a);
// ```

// ---

// <div dir="rtl">

// ### תרגיל 7

// מה יודפס? למה מתקבלת תוצאה כזו?

// </div>

// ```javascript
// function test() {
//   let a = 5;
// }

// test();
// console.log(a);
// ```

// ---

// <div dir="rtl">

// ### תרגיל 8

// מצא את הבעיה בקוד. האם זה באג או קוד תקין? הסבר.

// </div>

// ```javascript
// let x = 10;

// function change() {
//   x = 20;
// }
// change()
// console.log(x);
// ```

// ---

// <div dir="rtl">

// ### תרגיל 9

// מה יודפס?

// </div>

// ```javascript
// let num = 1;

// function first() {
//   num++;
// }

// function second() {
//   num = num + 2;
// }

// first();
// second();

// console.log(num);
// ```

// ---

// <div dir="rtl">

// ### תרגיל 10

// תקן את הקוד כך שהמשתנה **לא יהיה גלובלי**.

// </div>

// ```javascript
// let message = "Hi";

// function print() {
//     let message
//   console.log(message);
// }

// print()
// ```

// ---

// <div dir="rtl">

// ## תרגילים בינוניים

// ---

// ### תרגיל 11

// כתוב פונקציה שמקבלת מערך ומחזירה את **המספר הקטן ביותר** בו.

// function findSmall(arry) {
//   let min = arry[0];
//   for (const num of arry) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }

// console.log(findSmall([11, 2, 3, 4, 5, 6]));

// ---

// ### תרגיל 12

// כתוב פונקציה שמקבלת שני מספרים ומחזירה `true` אם הראשון **מתחלק** בשני.

// const pasivaDiv = (num1, num2) => num1 % num2 == 0;

// console.log(pasivaDiv(4, 3));

// ---

// ### תרגיל 13

// כתוב פונקציה שמקבלת מערך של מחרוזות ומחזירה **מחרוזת אחת מחוברת** (join).

// function combinStr(arry){
//     let str = ""
//     for(const arr of arry){
//         str += arr
//     }
//     return str
// }

// console.log(combinStr([["111"], ["222"]]))

// ---

// ### תרגיל 14

// מה יודפס?

// </div>

// ```javascript
// let x = 5;

// function test(x) {
//   x = x + 10;
//   return x;
// }

// let result = test(x);
// console.log(x);
// console.log(result);
// ```

// ---

// <div dir="rtl">

// ### תרגיל 15

// כתוב פונקציה שמקבלת מספר `n` ומדפיסה את כל המספרים מ-1 עד `n` — **בלי להשתמש במשתנה גלובלי**.

// function countNum(n){
//     let count = 0
//     while(count < n){console.log(count); count ++}
// }

// countNum(10)

// ---

// ## תרגילים מתקדמים

// ---

// ### תרגיל 16

// כתוב פונקציה שמקבלת מערך ומחזירה **מערך חדש ללא כפילויות**.

// function clearArry(arry) {
//   const newArr = [];
//   let nerArrLen = 0

//   for(let i = 0; i < arry.length; i++ ){
//     const current = arry[i]
//     let inde = false

//     for(let j = 0; j < newArr.length; j++){
//       if(newArr[j] === current){
//         inde = true
//         break
//       }
//     }
//     if(!inde){
//       newArr[nerArrLen] = current
//       nerArrLen++
//     }
//   }return newArr
// }

// console.log(clearArry(["11", "11", "22", "33", "11"]));
// ---

// ### תרגיל 17

// מצא את הבאג

// let sum = 0;

// function add(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
// }

// add([1, 2]);
// add([3, 4]);

// console.log(sum);
// ```

// - למה זה בעייתי?
// - איך מתקנים?

// ---

// ### תרגיל 18

// כתוב פונקציה שמקבלת מערך ומחזירה את **סכום האיברים הזוגיים** בלבד.

// function even(arr){
//   const newArr = []
//   for(const num of arr){
//     if(num % 2 ===0){
//       newArr.push(num)    }
//   } return newArr
// }

// console.log(even([1,2,3,4,5,6,7]));

// ---

// ### תרגיל 19

// מה יודפס?

// let x = 1;

// function a() {
//   let x = 2;

//   function b() {
//     console.log(x);
//   }

//   b();
// }

// a();

// ### תרגיל 20

// שפר את הקוד כך שלא תהיה תלות חיצונית:


// function getPrice(price) {
//   return price - price * 0.1;
// }


// - הפוך את הפונקציה ליותר גנרית
// - בלי שימוש במשתנה גלובלי

