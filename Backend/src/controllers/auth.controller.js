import userModel from "../models/auth.model.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

const authRegisterController = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const authLoginController = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

const authGetMeController = async (req, res) => {
    try {

    } catch (error) {
                res.status(400).json({
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

export {
    authGetMeController,
    authLoginController,
    authRegisterController
}