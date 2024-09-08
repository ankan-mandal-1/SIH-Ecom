import mongoose from "mongoose";

const connectDB = async () => {
    const res = await mongoose.connect(process.env.MONGO_DB).then(() => {
        console.log("DB Connected!")
    }).catch((error) => {
        console.log("Error in DB Connection: ", error)
    })
}

export default connectDB;