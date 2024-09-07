import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    // products: [{
    //     productId: {
    //         type: String,
    //         required: true
    //     },
    //     title: {
    //         type: String,
    //         required: true
    //     },
    //     quantity: {
    //         type: Number,
    //         required: true
    //     },
    //     price: {
    //         type: Number,
    //         required: true
    //     }
    // }],
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    // totalAmount: {
    //     type: Number,
    //     required: true
    // }
})

const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;