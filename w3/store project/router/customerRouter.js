import express from "express";
import { readJsonFile, writeJsonFile } from "../fileHandler.js";
import { findCustomerId, findProductId, validItem } from "../utils.js";
import { success } from "zod/mini";
import { addItemToCart, deleteProcust, findAndSumCart } from "../service/customerService.js";
import { number, string } from "zod";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if(!req.query.customerId){
      return res.status(400).json({success: false, message: "need valid customer id"})
    }

   const customerId = Number(req.query.customerId)
    const result = await findAndSumCart(customerId);
    if (typeof result === "string") {
      res.status(400).json({ success: false, data: result});
    } else {
      res.status(200).json({
        success: true,
        data: result
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

router.post("/item", async (req, res) => {
  try {
    const validation = validItem.safeParse(req.body);
    if (!validation.success) {
      return res
        .status(400)
        .json({ success: false, data: validation.error.format() });
    }

    const { customerId, productId, quantity } = req.body;
    const result = await addItemToCart(customerId, productId, quantity);
    if (typeof result === string) {
      res.status(400).json({ success: false, message: result });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      data: error.message
    });
  }
});

router.delete("/item/:productId", async (req, res) => {
  try {
    if (!req.body.customerId || typeof !req.body.customerId === 'number') {
      res.status(400).json({
        success: false,
        data: `need valid customer id`,
      });
    }
    const customerId = req.body.customerId;
    const productId = req.params.productId;
    const result = await deleteProcust(customerId, productId);
    if (typeof result === 'string') {
      res.status(400).json({ success: false, message: result });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
