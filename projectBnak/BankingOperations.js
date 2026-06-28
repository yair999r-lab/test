import { findById, findByName, cheakActiv, } from "./serach.js";

function actions(typeAction, id, amount, customers) {
  const customer = findById(id, customers);
  if (!customer) {
    console.log("customer not exists");
    return;
  }
  if (customer.isActive === false) {
    console.log("accont close!!");
    return;
  }
  if (!amount || typeof amount !== "number" || amount < 0) {
    console.log("amount cannot be less than 0");
    return;
  }
  if (typeAction === "deposit") {
    customer.balance += amount;
    console.log("Deposit completed successfully");
    return;
  }
  if (customer.balance < amount) {
    console.log("Withdraw failed: insufficient balance");
    return;
  }  
  customer.balance -= amount;
  console.log("Withdraw completed successfully");
  return;
}

export default actions;
