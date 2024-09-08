import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    original_price:{
        type: Number,
        required: true
    },
    offer_price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;