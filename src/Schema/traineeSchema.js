import mongoose from "mongoose";
import jwt from "jsonwebtoken";
let traineeSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, "name is required field"]
    },
    class: {
        type: Number,
        required:[true, "class is required field"],

    },
    faculty: {
        type: String,
        required: [true, "faculty is required field"]
    }
})

export default traineeSchema;
