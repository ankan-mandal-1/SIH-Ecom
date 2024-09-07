import OrderModel from "../models/OrderModel.js";

const createOrder = async (req, res) => {
    const {fullName, phone, address, city, state, pinCode, products} = req.body;

    const createOrder = new OrderModel({
        fullName, phone, address, city, state, pinCode, products
    })
    const saveOrder = await createOrder.save()
    
    return res.status(200).json({saveOrder})
}

const getAllOrders = async (req, res) => {
    try {
        const getOrders = await OrderModel.find({}).sort({ createdAt: -1 });
        return res.status(200).json(getOrders)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const getSingleOrder= async (req, res) => {
    const {id} = req.params;
    try {
        const getOrders = await OrderModel.findById(id).populate("products");
        return res.status(200).json(getOrders)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export {createOrder, getAllOrders, getSingleOrder}