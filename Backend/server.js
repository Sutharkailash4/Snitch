import { configDotenv } from "dotenv";
configDotenv();

import app from "./src/app.js";
import ConnectToDatabase from "./src/config/database.js";

const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});