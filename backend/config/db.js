import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://duonghoanglong:0oparactico0@cluster0.b4jos.mongodb.net/DB').then(()=>console.log("DB connceted"));
}