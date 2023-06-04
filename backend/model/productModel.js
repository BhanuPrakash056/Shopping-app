import mongoose from "mongoose";
//Schema for Product objects
const ProductSchema = new mongoose.Schema({
  productName: { type: String },
  productType: { type: String },
  productPrice: { type: Number },
  productImage: { type: String },
  Date: { type: Date, default: Date.now() },
  productDescription : { type: String}
});

const productDetails = mongoose.model("ProductSchema", ProductSchema);
export default productDetails;
