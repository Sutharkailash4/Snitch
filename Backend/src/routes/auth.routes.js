import express from "express";

const authRoutes = express();

import { authGetMeController, authLoginController, authRegisterController } from "../controllers/auth.controller.js";

authRoutes.post("/register", authRegisterController);
authRoutes.post("/login", authLoginController);
authRoutes.get("/getMe", authGetMeController);

export default authRoutes;

