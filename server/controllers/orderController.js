import OrderModel from "../models/OrderModel.js";

const createOrder = async (req, res) => {
    const {fullName, phone, address, city, state, pinCode, products} = req.body;

    if(!fullName || !phone || !address || !city || !state || !pinCode || !products){
        res.status(400).json({message: "All Fields are required"})
    }

    try {
        const createOrder = new OrderModel({
            fullName, phone, address, city, state, pinCode, products
        })
        const saveOrder = await createOrder.save()
        
        return res.status(200).json({saveOrder})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
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

const deleteOrder = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteOrder = await OrderModel.findByIdAndDelete(id)
        return res.status(200).json({message: "Product Deleted Successfully!"})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export {createOrder, getAllOrders, getSingleOrder, deleteOrder}