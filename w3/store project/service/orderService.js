import { readJsonFile, writeJsonFile } from "../fileHandler.js";
import { findCustomerId } from "../utils.js";

export async function getCheckhout(customerId) {
  const customers = await readJsonFile("customers.json");
  const customer = customers.find(
    (customer) => customer.customerId === customerId,
  );
  if (!customer) {
    return "customar dont exists";
  }
  if (customer.cart.length === 0) {
    return "You cannot check out an empty cart";
  }

  const products = await readJsonFile("products.json");

  let totalCheck = 0
  const orderItem = []
  for (const item of customer.cart) {
    const product = products.find(
      (product) => product.productId === item.productId,
    );

    if (!product) {
      return `product dont exists in the store`;
    }
    if (item.quantity > product.stock) {
      return `product ${product.name} quantity over the stock`;
    }
    totalCheck += item.quantity * product.price
    orderItem.push({
        productId: product.productId,
        name: product.name,
        quantity: item.quantity,
        price: product.price
    })
  }

  if (totalCheck > customer.balance) {
    return `There is not enough money in the account`;
  }
  for (const item of customer.cart) {
    const product = products.find((p) => p.productId === item.productId);
    product.stock -= item.quantity;
  }
  customer.balance -= totalCheck;

  customer.cart = [];

  const orders = await readJsonFile("orders.json");
  const naxtId = orders.length > 0 ? Math.max(...orders.map(order => order.id)) +1 : 1;

  const order = {
    id: naxtId,
    customerId: customerId,
    items: orderItem,
    total: totalCheck,
    createdAt: new Date().toISOString() 
  };

  orders.push(order)

  await writeJsonFile("customers.json", customers);
  await writeJsonFile("products.json", products);
  await writeJsonFile("orders.json", orders);

  return {order}
}

export async function findCustomerOrder(customerId){
    const allOrders = await readJsonFile("orders.json")
    console.log(customerId)

    const order = allOrders.filter((o) => o.customerId === +customerId)
    return order
}