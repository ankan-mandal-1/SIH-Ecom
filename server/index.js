import 'dotenv/config'
import express from "express";
import cors from "cors";
import cloudinary from "cloudinary"
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

const app = express()

//Routes
import authRoute from "./routes/authRoute.js"
import productRoute from "./routes/productRoute.js"
import orderRoute from "./routes/orderRoute.js"

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET // Click 'View Credentials' below to copy your API secret
});

app.use(cors())
app.use(cookieParser())
app.use(express.json())

connectDB()

app.use("/auth", authRoute)
app.use("/product", productRoute)
app.use("/order", orderRoute)

app.listen(process.env.PORT, () => {
    console.log("Server started on PORT", process.env.PORT)
})