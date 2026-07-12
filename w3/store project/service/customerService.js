import { readJsonFile, writeJsonFile } from "../fileHandler.js";
import { findCustomerId, findProductId } from "../utils.js";

export async function findAndSumCart(customerId) {
  const customar = await findCustomerId(customerId)
  if(!customar){
    return `customet with ${customerId} dont exists`
  }  
  const products = await readJsonFile("products.json")
  let totalCart = 0
  for(const item of customar.cart){
    const product = products.find((p) => p.productId === item.productId)
    totalCart += product.price * item.quantity
  }
  
  const costomerCart = {cart: customar.cart, totalCart}
  return costomerCart
}

export async function addItemToCart(customerId, productId, quantity) {
  const customers = await readJsonFile("customers.json");
  const customer = customers.find(
    (customer) => customer.customerId === +customerId,
  );
  if (!customer) {
    return `customer with ${customerId} id dont exists`;
  }
  const item = await findProductId(productId);
  if (!item) {
    return `product with ${productId} id dont exists`;
  }
  if (item.stock < 1) {
    return `product ${item.name} out of stock`;
  }
  if (item.stock < quantity) {
    return `Not enough quantity in stock - in stock: ${item.stock}`;
  }
  const existsItem = customer.cart.find(
    (product) => product.productId === productId,
  );
  if (existsItem) {
    existsItem.quantity += quantity;
  } else {
    customer.cart.push({
      productId: item.productId,
      name: item.name,
      quantity: quantity,
    });
  }

  await writeJsonFile("customers.json", customers);
  return {
    success: true,
    data: "item add successfuly",
  };
}

export async function deleteProcust(customerId, productId) {
  const customers = await readJsonFile("customers.json");
    const customer = customers.find((c) => c.customerId === customerId);
    if (!customer) {
      return "customer dont exists" 
    }
    const originLength = customer.cart.length;
    const productIdToDelete = +productId;
    
    customer.cart = customer.cart.filter(
      (item) => item.productId !== productIdToDelete,
    );

    if (customer.cart.length === originLength) {
      return 'product not found in customers cart'
    } else {
      await writeJsonFile("customers.json", customers);
      return {success: true, data: "product delete successfuly" };
    }
    
  
}