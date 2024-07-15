import mongoose from "mongoose";

import userSchema from "./userSchema.js";
import teacherSchema from "./teacherSchema.js";
import webUserSchema from "./webUserSchema.js";

//export const Product = mongoose.model ("Product", productSchema);
export const User =mongoose.model("User", userSchema);
export const Teacher =mongoose.model("Teacher", teacherSchema);
export const WebUser =mongoose.model("WebUser", webUserSchema);
