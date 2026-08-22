import userModel from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const authRegisterController = async (req, res) => {
    try {
        const {fullName, email, password, mobileNumber, role} = req.body;

        const isUserAlreadyExists = await userModel.find({
            email : email            
        });

        if(isUserAlreadyExists) {
            return res.status(404).json({
                message : "User already exists"
            })
        }

        const hash_password = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            fullName : fullName,
            email : email,
            password :  hash_password,
            mobileNumber : mobileNumber,
            role : role
        });

        const accessToken = jwt.sign({
            Fullname : user.fullName,
            id : user._id,
            email : user.email
        },
        process.env.JWT_ACCESS_TOKEN,
        {
            expiresIn : "3h"
        }
    )

    const refreshToken = jwt.sign({
        Fullname : user.fullName,
            id : user._id,
            email : user.email
    },
    process.env.JWT_REFRESH_TOKEN,
    {
        expiresIn : "7d"
    }
)

    res.cookie("access_token", accessToken, {
        httpOnly : true,
        secure : true,
        sameSite : "strict"
    });

        res.cookie("refresh_token", refreshToken, {
        httpOnly : true,
        secure : true,
        sameSite : "strict"
    });

    res.status(201).json({
        message : "User Created Successfully",
        fullname : user.fullName,
        id : user._id,
        email : user.email
    });

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