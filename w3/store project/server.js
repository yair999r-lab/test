import express from "express"
import customerRouter from "./router/customerRouter.js" 
import orderRouter from "./router/orderRouter.js"
import genarelRouter from "./router/genarelRouter.js"
import { configDotenv } from "dotenv"

const PORT = process.env.PORT

const server = express()

server.use(express.json())

server.use('/cart', customerRouter)

server.use('/order', orderRouter)

server.use("/", genarelRouter)

server.use("/", (req, res) => {
    res.status(404).json({success: false, message: "router dont exists in the server"})
})


server.listen(PORT, () => {console.log("runnig")})
