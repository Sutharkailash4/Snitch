import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : [true, "Username is required"],
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        unique : [true, "Email should be unique"]
    },
    password : {
        type : String,
        required : [true, "Password is required"]
    },
    mobileNumber : {
        type : String,
        required : [true, "Mobile number is required"],
        unique : [true, "Mobile number should be unique"]
    },
    role : {
        type : String,
        enum : ["buyer", "seller"],
        default : "buyer"
    }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;