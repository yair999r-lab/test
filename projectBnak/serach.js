export function findByName(fullName, customers) {
  if (customers.length < 1) {
    console.log("There are no customers registered in the system.");
    return;
  }
  return customers.filter(
    (customer) => customer.name.toLowerCase() === fullName.toLowerCase().trim(),
  );
}

export function findById(id, customers) {
  if (customers.length < 1) {
    console.log("There are no customers registered in the system.");
    return;
  }
  return customers.find((customer) => customer.id == id);
}

export function cheakActiv(customer) {
  if (!customer) {
    console.log("customer not exists");
    return;
  }
  if (customer.isActive === true) {
    customer.isActive = false;
    console.log("Account closed successfully");
    return;
  }
  console.log("account olrady closed");
  return;
}

export function showStatistics(customers) {
  const totalSummary = customers.reduce(
    (summary, customer) => {
      summary.totalCustomers += 1;
      summary.activeaccounts += customer.isActive;
      summary.totalMoney += customer.balance;
      if (customer.accountType === "regular") {
        summary.totalRegular += 1;
      } else if (customer.accountType === "premium") {
        summary.totalPremium += 1;
      } else summary.totalStudent += 1;
      if (customer.balance > summary.highestbalance) {
        summary.highestbalance = customer.balance;
      }
      return summary;
    },
    {
      totalCustomers: 0,
      activeaccounts: 0,
      totalMoney: 0,
      highestbalance: 0,
      totalRegular: 0,
      totalPremium: 0,
      totalStudent: 0,
    },
  );
  totalSummary["averagebalance:"] =
    totalSummary.totalMoney / totalSummary.totalCustomers;
  return totalSummary;
}
