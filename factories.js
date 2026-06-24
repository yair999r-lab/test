//1

// function createObj(name){
//     return {name: `${name}`}
// }

// const parson = createObj("yair")

//2

// function createObj(name){
//     return {name: `${name}`, greet: `hey im ${name}`}
// }
// const parson = createObj("kkk")

// console.log(parson.greet);

//3

// const parson1 = createObj("fff")

// console.log(parson1);

//4
// function createObj(name, age){
//     return {name: `${name}`, greet: `hey im ${name}`, age:`${age}`}}

// const parson2 = createObj("lll", 111)
// console.log(parson2);

//5

// function chekAge(){
//     return this.age > 18
// }

// function greet() {
//         return `hey im ${this.name}`}

// function createObj(name, age){
//     return {name, age, greet, chekAge}}

// const parson2 = createObj("lll", 111)
// const person1 = createObj("Yair", 26);
// console.log(person1.greet());
// console.log(parson2.chekAge());

//6

// function counter(){
//     let counter = 0
//     return () => ++counter
// }
// const count = counter()
// count()
// console.log(count());

//7
// function outer(){
//     let id = 1
//     return () => id++
// }
// const ids = outer()

// console.log(ids());
// console.log(ids());

//8/9/10

// function createCounter(number){
//     let count = number
//     return {
//         increment: function(){
//             count++
//             return count
//         }, decrement: function(){
//             count--
//             return count
//         }, getVal: function(){
//             return count
//         }
//     }
// }

// const myCounter = createCounter(10)

// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.getVal());
// console.log(myCounter.decrement());
// console.log(myCounter.getVal());

//11-12-13-14

// function factory(){
//     let counter = 0
//     return {
//         increment: function(){
//             counter++
//         },
//         getCount: function(){
//             return counter
//         },reset: function(){
//             counter = 0
//         }
//     }
// }
// const obj2 = factory()
// const obj = factory()

// obj.increment()
// console.log(obj.getCount());
// obj.reset();
// console.log(obj.getCount());

// obj2.increment()
// obj2.increment()
// obj2.increment()
// obj2.increment()
// obj2.increment()
// console.log(obj2.getCount());

//15-16-17-18

// function availability(){
//     return this.stock > 0
// }

// function validation(){
//     if(this.price < 0){
//         return console.log("error: price cant be negitiv")
//     }
// }

// function minStock(){
//     if(this.stock === undefined){
//         return this.stock = 0
//     } return this.stock
// }

// function prodect(name, price, stock){
//     const newProdect = {name, price, stock, availability, validation, minStock}
//     newProdect.minStock()
//     newProdect.validation()
//     return newProdect

// }

// const pro = prodect("nnn", -23, -3)
// console.log(pro.availability());

// console.log(pro.stock);

//19

// function multi(constant) {
//   return function (number) {
//     return number * constant;
//   };
// }

// const dubel = multi(2);
// console.log(dubel(5));

//20

// function greet(name){
//     return "hello " + `${name}`
// }
// console.log(greet("gg"));

//21--22--23

// function secretMessage(){
//     let messages = []
//     return {
//         addMessage: function(message){
//             messages.push(message)
//         },
//         showMessage: function(){
//             return [...messages]
//         },
//         deleteMesege:function(index){
//             if(index < 0 || index > messages.length-1){
//                 return console.log("index not exists");
//             } messages.splice(index,1)
//             return console.log("message delete");
            
//         }
//     }
// }

//24

// function user(name){
//     let counter = 0
//     return {name, 
//         login:function(){
//             return counter++
//         },getCounter: function(){
//             return counter
//         }
//     }
// }

// const u = user("fff")
// u.login()
// u.login()
// console.log(u.getCounter());

//25

// function roles(){
//     let permissions = []
//     return {
//         check: function(role){
//             return permissions.includes(role)
//         },add: function(role){
//             if(permissions.includes(role)){
//               console.log("role olredi exsist");
//               return
//             } permissions.push(role)
//         }, remove: function(role){
//             let index = permissions.indexOf(role)
//             if(index !== -1){
//                 permissions.splice(index, 1)
//             }
//         }
//     }
// }

