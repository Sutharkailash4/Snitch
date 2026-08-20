import express from "express";

const authRoutes = express();

import { authGetMeController, authLoginController, authRegisterController } from "../controllers/auth.controller.js";

authRoutes.post();
authRoutes.post();
authRoutes.get();

export default authRoutes;