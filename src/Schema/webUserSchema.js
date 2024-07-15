import mongoose from "mongoose";

let webUserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full Name is required field"]
    },

    email: {
        type: String, 
        unique:true,
        required: [true, "Email is required field"]
    },
    dob: {
        type: Date,
        required: [true, "Date of Birth is required field"]

    },
    password: {
        type:String,
        required: [true, "password is required fiels"]

    },
    gender: {
        type: String,
        required:[true, "gender is required field"]
    },
    role: {
        type: String,
        required: [true, "role is required field"]
    },
    isVerifiedEmail: {
        type: Boolean,
        required:[true, "verifiedemail is required field"],
        
    },

});

export default webUserSchema; 