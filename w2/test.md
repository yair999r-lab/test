# תרגילים: Promises ב־JavaScript - עטיפת Callbacks

---

## הכנה

צרו תיקייה:
```bash
promises-fs-practice
```

בתוכה:
- קובץ `app.js`
- תיקייה `data`

בכל תרגיל, הריצו:
```bash
node app.js
```

בתחילת `app.js` תמיד:
```js
const fs = require('fs');
// או 
import fs from 'fs';
```

---

## חלק א': עטיפת Callbacks בPromises

### תרגיל 1: Promise בסיסי - כתיבה לקובץ

צרו פונקציה `writeFileAsPromise(filePath, content)` שמעטפת את `fs.writeFile`:

- הפונקציה צריכה להחזיר <span dir="ltr">`new Promise()`</span>
- בתוך ה־Promise, קראו ל־`fs.writeFile`
- אם יש שגיאה, קראו ל־`reject(err)`
- אם הצליח, קראו ל־<span dir="ltr">`resolve()`</span>

אחרי זה, קראו לה עם `data/message.txt` ותוכן כלשהו, וראו ש־<span dir="ltr">`.then()`</span> קורה אחרי שהקובץ נוצר.

---

### תרגיל 2: Promise עם קריאה מקובץ

צרו פונקציה `readFileAsPromise(filePath)` שמעטפת את `fs.readFile`:

- בתוך ה־Promise, קראו ל־`fs.readFile` עם encoding <span dir="ltr">`'utf-8'`</sapn>
- אם יש שגיאה, קראו ל־`reject(err)`
- אם הצליח, קראו ל־`resolve(data)` - שימו לב: זרקו את **הנתונים** ל־resolve, לא void

קראו לה עם `data/message.txt` וראו שה־<span dir="ltr">`.then()`</span> מקבל את תוכן הקובץ.

---

### תרגיל 3: Promise עם עיבוד נתונים

צרו פונקציה `readFileAndCount(filePath)` שמעטפת את `fs.readFile`:

- קראו את הקובץ
- בתוך ה־`resolve()`, זרקו את **מספר התווים** של הנתונים, לא את הנתונים עצמם

קראו לה וראו שה־<span dir="ltr">`.then()`</span> מקבל ישירות את המספר.

---

## חלק ב': שרשור Promises שעטפתם

### תרגיל 4: שרשור שתי כתיבות

צרו גם פונקציה <span dir="ltr">`appendFileAsPromise(filePath, content)`</span>.

אחרי זה, **שרשרו**:
1. כתבו קובץ `data/step1.txt`
2. בתוך <span dir="ltr">`.then()`</span>, כתבו קובץ `data/step2.txt`

**חשוב**: צריך להחזיר (`return`) את ה־Promise השני מתוך <span dir="ltr">`.then()`</sapn> הראשון.

הדפיסו "Step 1 done" ו־"Step 2 done" בהתאם.

---

### תרגיל 5: שלוש קריאות בסדר
<p dir="rtl">
קראו לפי הסדר:
1. `data/step1.txt`
2. `data/step2.txt`
3. `data/step3.txt`
</p>
כל בקריאה צריכה להחזיר את הקובץ הבא, וב־`.then()` האחרון הדפיסו את שלוש התוכנים.

---

### תרגיל 6: דוח משולב
<p dir="rtl">
צרו שני קבצים:
- `data/report-title.txt` עם "Daily Report"
- `data/report-body.txt` עם "Everything is working"

אחרי זה, קראו את **שניהם**, חברו את התוכן, וכתבו לקובץ `data/final-report.txt`.

**הנקודה**: צריכים את **שניהם** בה זמנית, לא רק את הקובץ הקודם.
</p>
---

## חלק ג': fs.promises (הגרסה הגמורה)

### תרגיל 7: החלפה ל־fs.promises

החליפו את ה־import:
```js
const fs = require('fs').promises;
// או
import fs from 'fs/promises';

```

קראו קובץ בעזרת <span dir="ltr">`fs.readFile()`</span> בדיוק כמו שעשיתם בתרגיל 2, אבל **בלי** ה־callback wrapper שכתבתם.

ראו שה־API זהה - רק `fs.promises` עשה את העטיפה בשבילכם.

---

### תרגיל 8: שרשור עם fs.promises

בחרו תרגיל 5 או 6 וכתבו אותו שוב עם <span dir="ltr">`fs.promises`.</span>

שימו לב: הקוד זהה לחלוטין, רק בלי הפונקציות הprobe wrapper.

---

## חלק ד': בונוס - כתבו פונקציות משלכם

### תרגיל 9: פונקציות עם fs.promises
<p dir="rtl">
כתבו שלוש פונקציות שמחזירות Promises:
<p>- `createUser(username)` - יצירת תיקייה `data/users/{username}`</p>
<p>- `writeProfile(username, data)` - כתיבת `profile.txt` בתיקייה</p>
<p>- `readProfile(username)` - קריאת `profile.txt`</p>
</p>

אחרי זה, קראו להן בשרשור:
1. צרו user "alice"
2. כתבו לה פרופיל
3. קראו את הפרופיל והדפיסו

דף 2 מתוך 7