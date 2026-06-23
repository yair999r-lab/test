// # String Methods & Object Methods – תרגילים
import input from "analiza-sync";
// ---

// ## חלק 1 – String Methods

// ---

// ### תרגיל 1 – המרת טקסט לאחידות

// כתוב פונקציה שמקבלת שם משתמש ומחזירה אותו כולו באותיות קטנות.

// </div>

// ```
// Input:  "AlIcE"
// Output: "alice"

// const name = input()

// const low = name.toLowerCase();
// console.log(low);

// ```

// ---

// <div dir="rtl">

// ### תרגיל 2 – ניקוי קלט

// כתוב פונקציה שמקבלת מחרוזת ומסירה ממנה רווחים מיותרים בהתחלה ובסוף בלבד.

// </div>

// ```
// Input:  "  hello world  "
// Output: "hello world"
// ```

// const hello = input()
// const slise = hello.trim()
// console.log(slise);

// ---

// <div dir="rtl">

// ### תרגיל 3 – בדיקת אימייל

// כתוב פונקציה שמקבלת אימייל ומחזירה `true` אם הוא מכיל את התו `@`, אחרת `false`.

// ---

// const email = input()
// console.log(email.includes('@'));

// ### תרגיל 4 – בדיקת סיומת דומיין

// כתוב פונקציה שמקבלת אימייל ובודקת אם הוא מסתיים ב-`".com"`.

// הפונקציה תחזיר `true` / `false`.

// ---

// const email = input()
// console.log(email.endsWith("com"));

// ### תרגיל 5 – חיתוך שם משתמש

// כתוב פונקציה שמקבלת מחרוזת `"firstName lastName"` ומחזירה רק את השם הפרטי.

// השתמש ב-`slice` או `indexOf`.

// function fullName(){
//     const name = input()

//     const space = name.indexOf(" ")
//     const firstName = name.slice(0, space)
//     const lestName = name.slice(space + 1)
//     return firstName
// }

// console.log(fullName())

// ---

// ### תרגיל 6 – פיצול שם מלא

// כתוב פונקציה שמקבלת שם מלא ומחזירה מערך של שני חלקים:

// </div>

// ```
// ["שם פרטי", "שם משפחה"]

// function fullName(){
//     const name = input()

//     const space = name.indexOf(" ")
//     const firstName = name.slice(0, space)
//     const lestName = name.slice(space + 1)
//     return [firstName, les]
// }

// console.log(fullName())

// ```

// <div dir="rtl">

// השתמש ב-`split`.

// ---

// ### תרגיל 7 – החלפת טקסט

// כתוב פונקציה שמקבלת משפט ומחליפה את המילה `"bad"` במילה `"good"`.

// function replase(sentence) {
//   const newSentence = sentence.replaceAll("good", "bad")
//   return newSentence
// }

// console.log(
//  replase("good dey to you"))

// ---

// ### תרגיל 8 – ספירת הופעות

// כתוב פונקציה שמקבלת מחרוזת ובודקת כמה פעמים מופיעה האות `"a"`.

// השתמש ב-`split` או `indexOf` בלולאה.

// function countEpr(str){
//     let counter = 0
//     for(let letter of str){
//         if(letter === 'a'){
//             counter += 1
//         }
//     }return counter
// }
// console.log(countEpr("acdcdadsaadc")
// );

// ---

// ### תרגיל 9 – בדיקת התחלה

// כתוב פונקציה שבודקת אם מחרוזת מתחילה במילה `"JS"`.

// ---

// ### תרגיל 10 – חיתוך חלקי טקסט

// כתוב פונקציה שמקבלת טקסט ומחזירה רק את **10 התווים הראשונים** שלו.

// ---

// ### תרגיל 11 – padding למספרים

// כתוב פונקציה שמקבלת מספר ומחזירה אותו כמחרוזת באורך 5 עם אפסים בהתחלה.

// </div>

// ```
// Input:  42
// Output: "00042"
// ```

// ---

// <div dir="rtl">

// ### תרגיל 12 – חזרה על מחרוזת

// כתוב פונקציה שמקבלת מילה ומספר `n`, ומחזירה את המילה חוזרת `n` פעמים.

// </div>

// ```
// Input:  "hi", 3
// Output: "hihihi"
// ```

// ---

// <div dir="rtl">

// ### תרגיל 13 – ניקוי + עיצוב שם

// כתוב פונקציה שמקבלת שם עם רווחים מיותרים, ומחזירה אותו כך:

// - ללא רווחים מיותרים (trimmed)
// - אות ראשונה בכל מילה גדולה

// </div>

// ```
// Input:  "  john doe  "
// Output: "John Doe"
// ```

// ---

// <div dir="rtl">

// ## חלק 2 – Object Methods

// ---

// ### תרגיל 1 – שליפת מפתחות

// כתוב פונקציה שמקבלת אובייקט ומחזירה מערך של כל ה-keys שלו.

// function findKeys(arr) {
//   return Object.keys(arr);
// }

// const arr = { name: "ffd", dd: "qqq", www: 23232 };
// console.log(findKeys(arr));

// ---

// ### תרגיל 2 – שליפת ערכים

// כתוב פונקציה שמקבלת אובייקט ומחזירה מערך של כל הערכים בלבד.

// function findVal(arr){
//     return Object.values(arr)
// }

// const arr = {name: "sss", kkk: "123", ddd: "swsw"}
// console.log(findVal(arr));

// ---

// ### תרגיל 3 – מעבר על אובייקט

// כתוב פונקציה שמדפיסה כל key ו-value של אובייקט בצורה:

// </div>

// ```
// key: value
// ```

// <div dir="rtl">

// השתמש ב-`Object.entries`.

// function entrie(arr){
//     for(const [Key, val] of Object.entries(arr)){
//         console.log(`${Key}: ${val}`)
//     }
// }

// const arr = {name: "fff", sss: "www"}
// entrie(arr)
// ---

// ### תרגיל 4 – חישוב ממוצע ציונים

// ניתן אובייקט ציונים:

// </div>

// ```javascript
// const arr = { math: 80, english: 90, science: 70 }
// ```

// <div dir="rtl">

// כתוב פונקציה שמחזירה ממוצע.

// const val = Object.values(arr)

// function evra(arr){
//     let total = 0
//     for(const gred of val){
//         total += gred
//     } return total / val.length
// }

// console.log(evra(arr));

// ---

// ### תרגיל 5 – מיזוג אובייקטים

// כתוב פונקציה שמקבלת שני אובייקטים ומחזירה אובייקט מאוחד.

// השתמש ב-`Object.assign`.

// const obj = {name: "fff"}
// const obj1 = {age: "123"}
// console.log(obj);

// Object.assign(obj, obj1)
// console.log(obj);

// ---

// ### תרגיל 6 – הגדרות משתמש

// יש אובייקט ברירת מחדל:

// const obj = { theme: "light", lang: "en" }
// const obj1 = { lang: "he" }

// // והגדרות משתמש:

// function combinOb(obj, obj1){
//     return Object.assign(obj, obj1)
// }

// console.log(combinOb(obj, obj1));

// ```

// <div dir="rtl">

// כתוב פונקציה שמחזירה אובייקט סופי משולב.

// ---

// ### תרגיל 7 – בדיקת קיום מפתח

// כתוב פונקציה שמקבלת אובייקט ומפתח, ומחזירה `true` אם המפתח קיים ישירות באובייקט.

// השתמש ב-`Object.hasOwn`.

// function getKye(obj, key){
//     return Object.hasOwn(obj, key)
// }
// const obj = {name:"ddd"}
// const key = "namel"

// console.log(getKye(obj, key));

// ### תרגיל 8 – נעילת אובייקט

// כתוב קוד שיוצר אובייקט קבוע (`config`) שלא ניתן לשינוי.

// נסה לשנות ערך ובדוק אם השינוי הצליח.

// const config = Object.freeze({ name: "yair", age: 22 });
// console.log(config);

// config.name = "gdd";
// console.log(config);

// ---

// ### תרגיל 9 – המרת מערך לאובייקט

// כתוב פונקציה שמקבלת:
// ומחזירה אובייקט רגיל.

// const arr = [
//   ["name", "Alice"],
//   ["age", 25],
// ];

// function makeObj(arr) {
//   return Object.fromEntries(arr);
// }

// console.log(makeObj(arr));

// ### תרגיל 10 – שינוי ערכים באובייקט

// יש אובייקט מחירים:

// const obj = { apple: 10, banana: 5, mango: 20 };

// function lwoPrice(obj) {
//   return Object.fromEntries(
//     Object.entries(obj).map(([item, price]) => {
//       const newPr = price * 2;

//       return [item, newPr];
//     }),
//   );
// }

// lwoPrice(obj);
// console.log(lwoPrice(obj));

// כתוב פונקציה שמורידה **10% מכל מחיר**.

// השתמש ב-`Object.entries` + `map` + `Object.fromEntries`.

// ---

// ### תרגיל 11 – סינון שדות

// כתוב פונקציה שמקבלת אובייקט ומחזירה רק שדות שערכם **מספרי**.

// const obj = {name: "yar", age: 123}

// function getNum(obj){
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key, val]) =>{
//             return typeof val == "number"
//         })
//     )
// }

// console.log(getNum(obj));


// ### תרגיל 12 – שכפול בטוח

// כתוב פונקציה שמעתיקה אובייקט כך ששינוי בעותק **לא ישפיע על המקור** (שכפול שטחי).

// const obj = {name: "gggg", bbb: "ffffff"}

// function newOb(obj){
//     return {...obj}
// }

// function newObj(obj){
//     return Object.assign({}, obj)
// }

// ### תרגיל 13 – השוואת אובייקטים

// כתוב פונקציה שמקבלת שני אובייקטים ומחזירה `true` אם יש להם את **אותם keys** (בלי לבדוק ערכים).

// השתמש ב-`Object.keys`.

// const obj = {name: 123}
// const obj2 = {name: 123}
// const obj3 = {nam222e: 123, fff:5555555}

// function findKeys(obj1, obj2){
//     const keys1 = Object.keys(obj1)
//     const keys2 = Object.keys(obj2)

//     if(keys1.length !== keys2.length){
//         return false
//     }
//     return keys1.every(key => keys2.includes(key))
// }

// console.log(findKeys(obj, obj3));
