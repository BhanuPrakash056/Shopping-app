import express from "express";
const router = express.Router();
import { addProduct,removeProduct,getProduct} from "../controllers/Product.js";

router.post("/add", addProduct);
router.post("/remove", removeProduct);
router.get("/getProduct",getProduct)
export default router;
