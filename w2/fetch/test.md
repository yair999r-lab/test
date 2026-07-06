# תרגילים – Fetch ב-JavaScript

---

## רמה 1 – בסיסי

### תרגיל 1 – קריאה בסיסית ל-API

בצע קריאת GET ל-`https://jsonplaceholder.typicode.com/posts/1` והדפס את הכותרת (`title`) של הפוסט לקונסול.

---

### תרגיל 2 – טיפול בשגיאות רשת

בצע קריאה ל-URL שלא קיים: `https://jsonplaceholder.typicode.com/notfound`.  
הדפס את ה-status code שהתקבל, וטפל במקרה שה-response אינו `ok`.

---

### תרגיל 3 – שליפת רשימה והצגתה

שלוף את כל הפוסטים מ-`https://jsonplaceholder.typicode.com/posts`.  
הדפס לקונסול רק את הכותרת (`title`) של כל פוסט.

---

## רמה 2 – בינוני

### תרגיל 4 – שליחת POST

שלח בקשת POST ל-`https://jsonplaceholder.typicode.com/posts` עם הגוף הבא:

```json
{
  "title": "כותרת חדשה",
  "body": "תוכן הפוסט",
  "userId": 1
}
```

הדפס את האובייקט שהתקבל בתגובה.

---

### תרגיל 5 – async/await עם try/catch

כתוב פונקציה `getUserById(id)` שמשתמשת ב-`async/await`.  
שלוף משתמש מ-`https://jsonplaceholder.typicode.com/users/{id}`.  
אם ה-id לא קיים או הבקשה נכשלה – הדפס הודעת שגיאה מסודרת.

---

### תרגיל 6 – שרשור קריאות (Chaining)

שלוף פוסט מ-`https://jsonplaceholder.typicode.com/posts/1`.  
לאחר מכן, שלוף את המשתמש שכתב אותו לפי `userId` שהתקבל.  
הדפס: שם המשתמש + כותרת הפוסט.

---

### תרגיל 7 – Promise.all

שלוף במקביל את הנתונים מ-3 URL-ים שונים:

- `https://jsonplaceholder.typicode.com/users/1`
- `https://jsonplaceholder.typicode.com/posts/1`
- `https://jsonplaceholder.typicode.com/todos/1`

הדפס את כל התוצאות רק לאחר שכולן הסתיימו.

---

## רמה 3 – מתקדם

### תרגיל 8 – ביטול בקשה עם AbortController

כתוב בקשת fetch עם timeout של 3 שניות באמצעות `AbortController`.  
אם הבקשה לוקחת יותר מ-3 שניות – בטל אותה והדפס הודעה מתאימה.  
השתמש ב-`https://jsonplaceholder.typicode.com/posts` לבדיקה.

---

### תרגיל 9 – פונקציית fetch גנרית עם retry

כתוב פונקציה `fetchWithRetry(url, retries)` שמנסה לבצע בקשת GET.  
אם הבקשה נכשלת, היא מנסה שוב עד `retries` פעמים לפני שזורקת שגיאה.

</div>

```javascript
// קוד התחלה
async function fetchWithRetry(url, retries) {
  // השלם את הקוד
}
```

---

### תרגיל 10 – מטמון (Cache) בזיכרון

כתוב פונקציה `cachedFetch(url)` שמבצעת בקשת fetch.  
אם ה-URL כבר נשלף בעבר – החזר את הנתונים מהמטמון בלי לפנות לשרת.  
הוכח שהמטמון עובד על ידי קריאה פעמיים לאותו URL ובדיקה שהבקשה יצאה פעם אחת בלבד.

```javascript
// קוד התחלה
const cache = {};

async function cachedFetch(url) {
  // השלם את הקוד
}
```

המערכת מציגה את fetch_javascript_EXE.md.