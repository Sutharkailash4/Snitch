import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message : "Server is running"
    })
});

export default app;