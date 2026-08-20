import {body, validationResult} from "express-validator";

const validateRegister = [
    body("fullName")
    .trim()
    .isEmpty()
    .withMessage("Full Name is required")
    .isLength({min : 2 , max : 50})
    .withMessage("Full Name must be between 2 to 50 characters"),

    body("email")
    .trim()
    .isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),

    body("password")
    .trim()
    .isEmpty()
    .withMessage("Password is required")
    .isLength({min: 8, max: 128})
    .withMessage("Password must be beetwen 8 to 128 characters"),

    body("moblieNumber")
    .trim()
    .isEmpty()
    .withMessage("Mobie number is required")
    .isMobilePhone("en-IN")
    .withMessage("Enter a valid Indian mobile number"),

    
];

const validateLogin = [
    
];

export {
    validateRegister,
    validateLogin
}