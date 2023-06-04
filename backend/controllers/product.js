import { successResponse } from "../interceptor/successResponse.js";
import { errorResponse } from "../interceptor/errorResponse.js";
import productDetails from "../model/productModel.js";
const addProduct =  (req, res) => {
  let { name, type, price, image } = req.body;
  console.log(name, type, price, image);
  try {
    console.log(name);
    const product = productDetails();
    product.productName = name;
    product.productType = type;
    product.productPrice = price;
    product.productImage = image;
    product.save();
    console.log(name);
    return successResponse(res, 201, "Product added successfully");
  } catch (err) {
    return errorResponse(res, 500, err);
  }
};
export { addProduct };
