import express from "express";
const router = express.Router();

import {createOrder, getAllOrders, getSingleOrder, deleteOrder} from "../controllers/orderController.js"
import checkIsUserAuthenticated from "../middlewares/isAuth.js";

router.post("/add", createOrder)
router.get("/all", checkIsUserAuthenticated, getAllOrders)
router.get("/:id", checkIsUserAuthenticated, getSingleOrder)
router.delete("/:id", checkIsUserAuthenticated, deleteOrder)

export default router;