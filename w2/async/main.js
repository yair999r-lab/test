//5

// async function getData(){
// try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const data = await res.json()
//     console.table(data)
// }
// catch(error){
//     console.error(error)
// }
// }

// getData()

//6

// async function test() {
//     return "Done"
// }

// test().then(data => console.log(data))

//7

// async function squer(num) {
//     return num ** 2
// }

// console.log(await squer(5));

//14

// async function API(url1, url2) {
//     try {
//         const api1 = await fetch(url1)
//         const data1 = await api1.json()
//         console.log(`res1 is: `,data1);

//         const api2 = await fetch(url2)
//         const data2 = await api2.json()
//         console.log(`res2 is: `,data2)
//         }
//     catch(error){
//         console.error(error)
//     }
// }

// const urlA = "https://jsonplaceholder.typicode.com/todos/1";
// const urlB = "https://jsonplaceholder.typicode.com/todos/2";

// API(urlA, urlB)

//15--16

// async function getApis(url1, url2, url3) {
//     try{
//   const [res1, res2, res3] = await Promise.all([
//     fetch(url1),
//     fetch(url2),
//     fetch(url3),
//   ]);
  
//   const data1 = await res1.json();
//   const data2 = await res2.json();
//   const data3 = await res3.json();

//   console.log(`data1: `, data1);
//   console.log(`data2: `, data2);
//   console.log(`data3: `, data3);}
//   catch(error){
//     console.log(error)
//   }
// }

// getApis(
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/2",
//   "https://jsonplaceholder.typicode.com/todos/3"
// );

//18

// async function runUrl(URLs) {
//     for(const url of URLs){
//         const data = await fetch(url)
//         console.log(await data.json());
//     }
// }

// runUrl(["https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/2",
//   "https://jsonplaceholder.typicode.com/todos/3"])

//19

// async function runUrlSymul(URLs){
//     const respons = await Promise.all(URLs.map((url) => fetch(url)))
//     const data = await Promise.all(respons.map((res) => res.json()))
//     return data
// }

// const all = await runUrlSymul([
//     "https://jsonplaceholder.typicode.com/todos/1",
//     "https://jsonplaceholder.typicode.com/todos/2",
//     "https://jsonplaceholder.typicode.com/todos/3"])


// console.log(all);

