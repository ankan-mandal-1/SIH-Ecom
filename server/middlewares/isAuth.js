import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

const checkIsUserAuthenticated = async (req, res, next) => {
    const {authorization} = req.headers;

    if(authorization && authorization.startsWith("Bearer")){
        try {
            const token = authorization.split(" ")[1];
            const data = jwt.verify(token, process.env.JWT)
            req.user = data
            next()
        } catch (error) {
            return res.status(401).json({message: "Unauthorized User!"})
        }
    } else {
        return res.status(401).json({message: "Unauthorized User!"})
    }
}

export default checkIsUserAuthenticated;