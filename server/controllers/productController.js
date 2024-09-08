import ProductModel from "../models/ProductModel.js";
import getDataUrl from "../utils/urlGenerator.js";
import cloudinary from "cloudinary"

const getAllProducts = async (req, res) => {
    const {limit} = req.query
    try {

        if(limit){
            const products = await ProductModel.find({}).sort({ createdAt: -1 }).limit(limit);
            return res.status(200).json(products)
        }

        const products = await ProductModel.find({}).sort({ createdAt: -1 });
        return res.status(200).json(products)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const getAllProductsByOwner = async (req, res) => {
    try {
        const products = await ProductModel.find({owner: req.user._id});
        res.status(200).json(products)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const addProduct = async (req, res) => {
    const {title, description, original_price, offer_price } = req.body;
    try {
        if(req.file){
            const file = req.file
            const fileUrl = getDataUrl(file)
            const cloud = await cloudinary.v2.uploader.upload(fileUrl.content)

            const addProduct = new ProductModel({
                title,
                description,
                original_price,
                offer_price,
                imageUrl: cloud.secure_url,
                owner: req.user._id
            })
            const saveProduct = await addProduct.save()
            return res.status(200).json({message: "Product added successfully!", saveProduct})
        } else {

            const addProduct = new ProductModel({
                title,
                description,
                original_price,
                offer_price,
                owner: req.user._id
            })
            const saveProduct = await addProduct.save()

            return res.status(200).json({message: "Product added successfully!", saveProduct})
        }
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const getSingleProduct = async (req, res) => {
    const {id} =  req.params;
    try {
        const getProduct = await ProductModel.findById(id);
        if(!getProduct){
            return res.status(200).json({message: "No Product Found"})
        } 
        return res.status(200).json(getProduct)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

const deleteProduct = async (req, res) => {
    const {id} = req.params
    try {
        const getProduct = await ProductModel.findById(id)
        const authUser = req.user._id
        if(getProduct.owner.toString() === authUser.toString()){
            await ProductModel.findByIdAndDelete(id);
            return res.status(200).json({message: "Product Deleted Successfully!"})
        } else {
            return res.status(401).json({message: "Unauthorized User!"})
        }
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export {getAllProducts, getAllProductsByOwner, addProduct, getSingleProduct, deleteProduct}