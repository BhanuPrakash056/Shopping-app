import mongoose from "mongoose";
//Schema for answer queries
const ProductSchema = new mongoose.Schema({
  productName: { type: String },
  productType: { type: StringDecoder },
  productPrice: { type: number },
  productImage: { type: String },
});

const productDetails = mongoose.model("ProductSchema", ProductSchema);
export default productDetails;
