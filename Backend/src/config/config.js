import { configDotenv } from "dotenv";
configDotenv();

if(!process.env.PORT) {
    throw new Error("Port is not defined in environemt variable");
}

if(!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variale variable");
}

if(!process.env.JWT_ACCESS_TOKEN) {
    throw new Error("MONGO_URI is not defined in environment variale variable");
}

if(!process.env.JWT_REFRESH_TOKEN) {
    throw new Error("MONGO_URI is not defined in environment variale variable");
}

export const config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
    JWT_ACCESS_TOKEN: process.env.JWT_REFRESH_TOKEN,
};