import express from "express";
const router = express.Router();
import { addProduct,removeProduct } from "../controllers/Product.js";

router.post("/add", addProduct);
router.post("/remove", removeProduct);
export default router;
