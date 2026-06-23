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


// ---

// ### תרגיל 30

// הוסף איבר למערך באמצע באמצעות `splice`.

// ---

// ### תרגיל 31

// החלף איבר קיים באחר.

// ---

// ## חלק ח' – flat / flatMap

// ---

// ### תרגיל 32

// שטח מערך מקונן ברמה אחת.

// ---

// ### תרגיל 33

// שטח מערך מקונן עמוק לחלוטין.

// ---

// ### תרגיל 34

// קבל מערך משפטים והחזר מערך של כל המילים (`flatMap`).

// ---

// ## חלק ט' – Chaining

// ---

// ### תרגיל 35

// יש מערך מוצרים — בצע chain אחד:

// - סנן מוצרים במלאי
// - מיין לפי מחיר
// - החזר רק שמות

// ---

// ### תרגיל 36

// יש מערך מספרים — בצע chain אחד:

// - סנן רק זוגיים
// - הכפל ב-2
// - חשב סכום

// ---

// ### תרגיל 37

// יש מערך משתמשים — בצע chain אחד:

// - סנן מעל גיל 18
// - החזר רק שמות
// - הפוך למחרוזת אחת עם פסיקים

// ---

// ## תרגילי חשיבה

// ---

// ### תרגיל 38 – groupBy

// ממש `groupBy` באמצעות `reduce`.

// קלט:

// </div>

// ```javascript
// [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }]
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

// ---

// ### תרגיל 40 – האלמנט הנפוץ ביותר

// מצא את האלמנט שמופיע הכי הרבה פעמים.

// ---

// ## תרגיל מסכם (חובה)

// ### תרגיל 41 – מערכת מוצרים

// </div>

// ```javascript
// const products = [
//   { name: "Laptop", price: 800, inStock: true,  category: "tech"    },
//   { name: "Phone",  price: 400, inStock: false, category: "tech"    },
//   { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" }
// ];
// ```

// <div dir="rtl">

// בצע הכל ב-chain אחד:

// 1. סנן רק מוצרים במלאי
// 2. סנן רק מוצרים מעל 100
// 3. מיין לפי מחיר
// 4. החזר רק שמות
// 5. חבר למחרוזת אחת

// </div>
// array_methods_EXE.md
// דף 2 מתוך 12
