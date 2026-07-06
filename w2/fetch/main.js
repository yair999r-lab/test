//1

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data['title']));

//2

// fetch("https://jsonplaceholder.typicode.com/notfound")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data['title']));

//3

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   })
//   .then((data) =>
//     data.forEach((post) => {
//       console.log(post.title);
//     }),
//   );

//4

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     "method": "POST",
//     "titel": "כותרת חדשה",
//     "body": "תוכן הפוסט",
//     "userId": 1
// })
// .then((res) => {
//     if(!res.ok)
//         throw new Error(`status: ${res.status}`)
//     return res.json()
// })
// .then(console.log)
// .catch(console.error)

//5

// function getUserById(id) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
//     (res) => {
//       if (!res.ok) throw new Error(`status: ${res.status}`);
//       return res.json();
//     },
//   );
// }

// getUserById(1)
//   .then((res) => console.log(res))
//   .catch(console.error);

//6

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => {
//     if (!res.ok) throw new Error(`status: ${res.status}`);
//     return res.json();
//   })
//   .then((res) => console.log(`userId: ${res["userId"]}\ntitle: ${res["title"]}`));

//7

// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/users/1"),
//   fetch("https://jsonplaceholder.typicode.com/posts/1"),
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
// ])
// .then((respons) => {
//     respons.forEach(res => {
//         if(!res.ok) {
//             throw new Error(`Status: ${res.status}`)
//         }
//     })
//     return Promise.all(respons.map(res => res.json()))
// }).then(([user, post, todo]) => {
//     console.log(user)
//     console.log(post)
//     console.log(todo)
// })

//8

// const contloer = new AbortController();
// const signal = contloer.signal;

// const time = setTimeout(() => {
//   contloer.abort();
// }, 100);

// fetch("https://jsonplaceholder.typicode.com/posts", { signal })
//   .then((res) => {
//     if (!res.ok) throw new Error(`status: ${res.status}`);
//     return res.json();
//   })
//   .then((data) => {
//     clearTimeout(time);
//     console.table(data[0].title);
//   })
//   .catch((error) => {
//     if (error.name === "AbortError") {
//       console.log("time error");
//     } else {
//       console.log(error.message);
//     }
//   });

//9

// function fetchWithRetry(url, retries) {
//     return fetch(url)
//     .then((res) => {
//         if(!res.ok){
//             if(retries > 1){
//                 console.log(`Failed with status ${res.status}. Retries left: ${retries - 1}`);
//           return fetchWithRetry(url, retries - 1);
//             }else{
//                 throw new Error(`status: ${res.status} --- end--` );
//             }
//         }return res.json();
//     })
//     .catch((err) => {
//         if (retries > 1) {
//         console.log(`Network error. Retries left: ${retries - 1}`);
//         return fetchWithRetry(url, retries - 1);
//       }else{
//         throw err
//       }
//     })
// }

// fetchWithRetry("https://httpstat.us/500", 3)
//   .then(data => console.log("Success:", data))
//   .catch(err => console.error("Final Error:", err.message));



