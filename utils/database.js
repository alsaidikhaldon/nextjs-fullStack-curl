import mongoose from "mongoose";

let isDbConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isDbConnected) {
        console.log('MongoDB is already connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : "db_prompt",

        })
        isDbConnected = true;
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
}