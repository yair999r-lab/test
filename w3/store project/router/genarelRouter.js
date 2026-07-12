import express from "express"
import { findCustomerId } from "../utils.js"
import { readJsonFile } from "../fileHandler.js"
import { findSearchProduct } from "../service/genarelService.js"
import { success } from "zod"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
  success: true,
  data: "Welcome to The Hero's Forge API. Quality blades, mythic armor, and survival gear. May your journey be victorious."})
})

router.get("/health", (req, res)=>{
    res.status(200).json({success: true, data: "the server is alive"})
})

router.get("/account/balance/", async (req, res) => {
    try{
        if(!req.query.customerId){
            return res.status(400).json({success: false, message: "need valid customer id"})
        }
        const customer = await findCustomerId(+req.query.customerId)
        if(!customer){
            return res.status(400).json({success: false, message: "customer dont exists"})
        }
        res.status(200).json({success: true, data: `customer balance is: ${customer.balance}`})
    }
    catch(error){
        res.status(500).json({success: false, message: error.message})
    }
})

router.get("/products", async (req, res) => {
    try{
       const {inStock, maxPrice, search} = req.query

       const searchProducts = await findSearchProduct(inStock, maxPrice, search)
       res.status(200).json({success: true, data: searchProducts})
    }
    catch(error){
        res.status(500).json({success: false, message: error.message})
    }
})

export default router

