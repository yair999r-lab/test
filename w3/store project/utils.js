import { z } from "zod";
import { readJsonFile } from "./fileHandler.js";

export async function findCustomerId(id) {
  const data = await readJsonFile("customers.json");
  return data.find((customer) => customer.customerId === +id);
}
export async function findProductId(id) {
  const data = await readJsonFile("products.json");
  return data.find((item) => item.productId === +id);
}

export const validItem = z.object({
  customerId: z
    .number({
      required_error: "Required field!!!",
      invalid_type_error: "customerId must be number!!!",
    })
    .int({ message: "customerId must be int number!!!" })
    .positive({
      message: "customerId must be positive number!!",
    }),
  productId: z
    .number({
      required_error: "Required field!!!",
      invalid_type_error: "productId must be number!!!",
    })
    .int({ message: "productId must be int number!!!" })
    .positive({
      message: "productId must be positive number!!",
    }),
  quantity: z
    .number({
      required_error: "Required field!!!",
      invalid_type_error: "quantity must be number!!!",
    })
    .int({ message: "quantity must be int number!!!" })
    .positive({
      message: "quantity must be positive number!!",
    }),
});
