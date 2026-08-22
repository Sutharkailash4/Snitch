import {body, validationResult} from "express-validator";

const validateRequests = (req, res, next) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()
        });
    }

    next();
    
};

const validateRegister = [
    body("fullName")
        .trim()
        .notEmpty()
        .withMessage("Full Name is required")
        .isLength({ min: 2, max: 50 })
        .withMessage("Full Name must be between 2 to 50 characters"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email")
        .normalizeEmail(),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8, max: 128 })
        .withMessage("Password must be between 8 to 128 characters"),

    body("mobileNumber")
        .trim()
        .notEmpty()
        .withMessage("Mobile number is required")
        .isMobilePhone("en-IN")
        .withMessage("Enter a valid Indian mobile number"),

    validateRequests
];

const validateLogin = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email")
        .normalizeEmail(),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8, max: 128 })
        .withMessage("Password must be between 8 to 128 characters"),

    validateRequests
];

export {
    validateRegister,
    validateLogin
}