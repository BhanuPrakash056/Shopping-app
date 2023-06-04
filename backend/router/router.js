import { express } from "express";
const router = express.router();
import { addProduct } from "../controllers/product.js";

router.post('/add', addProduct);
