import mongoose from "mongoose";

import userSchema from "./userSchema.js";
import teacherSchema from "./teacherSchema.js";

//export const Product = mongoose.model ("Product", productSchema);
export const User =mongoose.model("User", userSchema);
export const Teacher =mongoose.model("Teacher", teacherSchema);