import UserModel from "../models/UserModel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

const register = async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message: "All Fields are Required!"})
    }
    try {
        // Checking if user already exist!
        const checkAlreadyUser = await UserModel.findOne({email});
        if(checkAlreadyUser){
            return res.status(400).json({message: "User Already Exist!"})
        }

        // Hash Password
        const genSalt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, genSalt)

        // Creating new user
        const newUser = new UserModel({
            name, email, 
            password: hashPassword
        })

        const saveUser = await newUser.save()
        if(saveUser){
            // Generating token
            const token = jwt.sign({_id: saveUser._id, email: saveUser.email, name: saveUser.name}, process.env.JWT)
            return res.status(200).json({message: "User registered successfully!", token, saveUser})
        } else {
            return res.status(400).json({message: "Something went wrong in Registration!"})
        }
    } catch (error) {
        return res.status(400).json({message: "Something went wrong in Registration!"})
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        // Checking user is registered or not
        const checkUser = await UserModel.findOne({email});
        if(!checkUser){
            return res.status(400).json({message: "User not registered!"})
        }

        const comparePassword = await bcryptjs.compare(password, checkUser.password)
        if(comparePassword){
             // Generating token
            const token = jwt.sign({_id: checkUser._id, email: checkUser.email, name: checkUser.name}, process.env.JWT)

            return res.status(200).json({message: "User Login Successfully!", token})
        } else {
            return res.status(400).json({message: "Invalid Credentials!"})
        }
    } catch (error) {
        return res.status(400).json({message: "Something went wrong in Login!"})
    }
}

export {register, login}