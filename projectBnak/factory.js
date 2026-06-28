import actions from "./BankingOperations.js";
import { showStatistics, findByName, findById, cheakActiv } from "./serach.js";

export function createBank() {
  let customers = [];
  let nextid = 1;

  function createCustomer(fullName, accountType, balance) {
    let id = nextid++;
    const newAccont = {
      id,
      fullName,
      accountType,
      balance,
      isActive: true,
    };
    customers.push(newAccont);
    return id;
  }

  return {
    createcustomer: createCustomer,
    showCustomers: function () {
      return customers;
    },
    showstatistics: function () {
      return showStatistics(customers);
    },
    findbyid: function (id) {
      console.log(customers);

      return findById(id, customers);
    },
    findbyname: function (name) {
      return findByName(name, customers);
    },
    cheakactiv: function (id) {
      return cheakActiv(findById(id, customers));
    },
    deposit: function (id, amount) {
      return actions('deposit', id, amount, customers);
    },
    withdraw: function (id, amount) {
      return actions('withdraw', id, amount, customers);
    },
  };
}


