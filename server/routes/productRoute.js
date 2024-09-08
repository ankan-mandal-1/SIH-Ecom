import express from "express";
import { addProduct, getAllProductsByOwner, getAllProducts, getSingleProduct, deleteProduct } from "../controllers/productController.js";
import uploadFile from "../middlewares/multer.js";
import checkIsUserAuthenticated from "../middlewares/isAuth.js";
const router = express.Router();

router.get("/all", getAllProducts)
router.get("/all-by-owner", checkIsUserAuthenticated, getAllProductsByOwner)
router.post("/add", checkIsUserAuthenticated, uploadFile.single("file"), addProduct)
router.get("/:id", getSingleProduct)
router.delete("/:id", checkIsUserAuthenticated, deleteProduct)

export default router;