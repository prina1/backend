import { Schema } from "mongoose";

let reviewSchema = mongoose.Schema({
    productId: {
        type: Schema.ObjectId,
        ref:"product",
        required: [true, "ProductId is required field"]
    },
    userId: {
        type: Schema.ObjectId,
        ref:"User",
        required: [true, "UserId is required field"]
    },
    description: {
        type: String,
        required: [true, "Description is required field"]
    },
    
});
export default reviewSchema;