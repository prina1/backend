import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required field"]
    },
    email: {
        type: String,
        required: [true, "Email is required field"]
    },
    password: {
        type: String,
        required: [true, "Password is required field"]
    },
    
});
export default userSchema;