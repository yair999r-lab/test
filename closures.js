//1

// const createLogger = () => console.log("hello");
// createLogger()
// createLogger()

//2

// function createGreeting(name){
//     return console.log("hello " + `${name}`);
// }

// createGreeting("yair")
// createGreeting("fff")

//3

// function createCounter(){
//     let conter = 0
//     return () => conter++
// }

// const count = createCounter()
// console.log(count());
// console.log(count());

//4

//--10--

//5

// function createMultiplier(x){
//     let mul = x
//     return () => mul * 2
// }
// const multi = createMultiplier(10)

// console.log(multi());

//6

// function createAdder(number){
//     return (addnum) => number + addnum
// }

// const add5 = createAdder(5)
// console.log(add5(3));

//7

// function createSecret(mySecret){
//     let secret = mySecret
//     return{
//         getSecret: function(){
//         return secret
//     },setSecret: function(newSecret){
//         secret = newSecret
//     }
//     }
// }

// const passw = createSecret("1234pasd")
// console.log(passw.getSecret());
// passw.setSecret("4444");
// console.log(passw.getSecret());

//8

// function once(fn){
//     let hesRun = false

//     return function(){
//         if(hesRun === false){
//             hesRun = true
//             return fn
//         }
//         else{
//             console.log("this function olrady bin yoss");
//         }
//     }
// }

//12

// function createStack() {
//   let items = [];

//   return {
//     push: function (item) {
//       items.push(item);
//     },
//     pop: function () {
//       if (items.length === 0) {
//         return "list empty";
//       }
//       return items.pop();
//     },
//     peek: function () {
//       if (items.length === 0) {
//         return "list empty";
//       }
//       return items[items.length - 1];
//     },
//   };
// }

// const stack = createStack()

// console.log(stack.peek());
// stack.push(3);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());

//13

// function createIdGenerator(){
//     let id = 1
//     return () => id++
// }

// const gen = createIdGenerator()
// console.log(gen());
// console.log(gen());
// console.log(gen());
// console.log(gen());

//15

// function createBankAccount(initialBalance) {
//   let balance = initialBalance;

//   return {
//     deposit: function (amount) {
//       return (balance += amount);
//     },
//     withdraw: function (amount) {
//       if (amount > balance) {
//         return "high withdraw from the balance";
//       }
//       return (balance -= amount);
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
// }
