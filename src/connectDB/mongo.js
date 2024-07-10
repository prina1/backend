import mongoose from 'mongoose';


const connectMongoDB = () => {
  mongoose.connect("mongodb://localhost:27017/Nnine");
  console.log("Connected to mangoDb DataBase")
}
export default connectMongoDB