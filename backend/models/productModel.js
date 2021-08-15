import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    owner: { type: String, required: true },
    catagory: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },

}, {
    timestamp: true,
});
const Product = mongoose.model('Product', productSchema);

export default Product;