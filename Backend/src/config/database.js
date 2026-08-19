import mongoose from "mongoose";
import { config } from "./config.js";

const ConnectToDatabase = async () => {
    try {

        await mongoose.connect(config.MONGO_URI);

        console.log("Connected to database successfully");

    } catch (error) {
        console.error(error.message);
    }
}

export default ConnectToDatabase;