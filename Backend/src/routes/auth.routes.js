import express from "express";

const authRoutes = express();

import { authGetMeController, authLoginController, authRegisterController } from "../controllers/auth.controller.js";
import { validateRegister, validateLogin } from "../validators/auth.validator.js";

authRoutes.post("/register", validateRegister, authRegisterController);
authRoutes.post("/login", validateLogin, authLoginController);
authRoutes.get("/getMe", authGetMeController);

export default authRoutes;

