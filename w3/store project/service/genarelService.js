import { tr } from "zod/locales";
import { readJsonFile } from "../fileHandler.js";
import { includes, toLowerCase } from "zod";

export async function findSearchProduct(inStock, maxPrice, search) {
  let products = await readJsonFile("products.json");

  if (inStock === "true") {
    products = products.filter((p) => p.stock > 0);
  }
  if (maxPrice) {
    products = products.filter((p) => p.price <= Number(maxPrice));
  }
  if (search) {
    products = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }
  return products;
}
