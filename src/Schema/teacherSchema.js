import mongoose from "mongoose"
let teacherSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Name is required field"]
    },
    email: {
        type: String,
        required: [true, "Email is required field"]
    }, 
    address: {
        type: String,
        required: [true, "Address is required field"]
    },
    phone: {
        type: Number,
        required: [true, "phone number is required field"]
    },
    subject: {
        type: String,
        required: [true, "Subject is required field "]
    }


})
export default teacherSchema;