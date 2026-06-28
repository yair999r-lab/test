import { createBank } from "./factory.js";
import input from "analiza-sync";
import { chackTypeAcoount, checkNumber, checkString , getValidInput} from "./utils.js";

const bank = createBank();
let flag = true;

console.log("Welcome to our bank!!!");

do {
  console.log(`
===================================================
Please select an action by entering a number:

  [1] Create a new customer account
  [2] Deposit money
  [3] Withdraw money
  [4] Find customer by ID
  [5] Find customer by Name
  [6] Show all customers
  [7] Freezing an account by ID
  [8] Show bank statistics
  [9] Exit
=================================================== `);
  const choice = input("your choice: ");
  switch (choice.trim()) {
    case "1":{
      const name = getValidInput("enter a full name: ", checkString, "please enter a valid name");
      const typeAccount = getValidInput("enter account type - must by: regular, premium, student ", chackTypeAcoount, "please select regular, premium, student only!!!");
      const number = getValidInput("please enter a inisils balance: ", checkNumber, "please enter a valid positiv number");
        const customer = bank.createcustomer(name, typeAccount, number)
        console.log("account create!!! your id is: " + `${customer}`);
        break
    }
    case "2":{
        const id = getValidInput("enter account id: ", checkNumber, "please enter valid number!!!")
        const amuont = getValidInput("enter a amuont of monay you wont to Deposit: ", checkNumber, "please enter a positiv number!!")
        bank.deposit(id, amuont)
        break
    }
    case "3":{
      const id = getValidInput("enter account id: ", checkNumber, "please enter valid number!!!")
        const amuont = getValidInput("enter a amuont of monay you wont to withdraw: ", checkNumber, "please enter a positiv number!!")
        bank.withdraw(id, amuont)
    break}
    case "4":{
      const id = getValidInput("enter account id: ", checkNumber, "please enter valid number!!!")
      const accont = bank.findbyid(id)
      if(accont){
        console.table(accont)
      }else{
        console.log(`account with this id - ${id} - not exists`);
      }break
    }
    case "5":{
        const name = getValidInput("enter a full name: ", checkString, "please enter a valid name")
        const accont = bank.findbyname(name)
        if(accont){
            console.table(accont);
        }else{
            console.log(`account with this name - ${name} - not exists`);
        }break
    }
    case "6":{
        console.table(bank.showCustomers())
        break}
    case "7":{
        const id = getValidInput("enter account id: ", checkNumber, "please enter valid number!!!")
        bank.cheakactiv(id)
        break}
    case "8":{
        console.table(bank.showstatistics)
        break}
    case "9":{
        flag = false
        break}
    default:
        console.log("Please choose according to the menu.");
        
  }
} while (flag === true);
