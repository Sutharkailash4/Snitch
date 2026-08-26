// Load Dotenv

import { configDotenv } from "dotenv";
configDotenv();

import app from "./src/app.js";
import ConnectToDatabase from "./src/config/database.js";

const port = 3000 || process.env.PORT;

// Connect To Datbase and Start Server

const serverStart = async () => {
    try {

        await ConnectToDatabase();

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })

    } catch (error) {

        console.error("Failed to start server : ",error.message);

    }
}

serverStart();