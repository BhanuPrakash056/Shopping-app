import { successResponse } from "../interceptor/successResponse.js";
import { errorResponse } from "../interceptor/errorResponse.js";
import productDetails from "../model/productModel.js";

const addProduct = (req, res) => {
  let { name, type, price, image ,desc } = req.body;
  try {
    const product = productDetails();
    product.productName = name;
    product.productType = type;
    product.productPrice = price;
    product.productImage = image;
    product.productDescription= desc;
    product.save();
    return successResponse(res, 201, "Product added successfully");
  } catch (err) {
    return errorResponse(res, 500, err);
  }
};

const removeProduct = async (req, res) => {
  let { id } = req.body;
  try {
    const product = await productDetails.findByIdAndRemove(id);
    return successResponse(res, 204, "Product removed successfully");
  } catch (err) {
    return errorResponse(res, 500, err);
  }
}

const getProduct = async (req,res) =>{
  try {
    const product = await productDetails.find();
      successResponse(res,200,product)
  } catch (err) {
    errorResponse(res,500,err);
  }
}
export {addProduct,removeProduct,getProduct};

