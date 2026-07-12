import express from "express";
import { getCheckhout, findCustomerOrder } from "../service/orderService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (!req.query.customerId) {
      return res
        .status(400)
        .json({ success: false, message: "need valid customer id" });
    }
    const customerId = +req.query.customerId;

    const orders = await findCustomerOrder(customerId);
    if (!orders) {
      return res
        .status(400)
        .json({ success: false, message: "customer dont exists" });
    }
    console.log(orders);
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/checkhout", async (req, res) => {
  try {
    if (!req.body.customerId || typeof req.body.customerId !== "number") {
      return res
        .status(400)
        .json({ success: false, message: `need valid customer id` });
    }
    const result = await getCheckhout(req.body.customerId);
    if (typeof result === "string") {
      res.status(400).json({ success: false, message: result });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
