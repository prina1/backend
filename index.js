import express from 'express';
import connectMongoDB from './src/connectDB/mongo.js';
// import userRoutes from './src/routes/userRoutes.js'; // Commented out as it's not used
import userRouter from './src/routes/userRouter.js';
import teacherRouter from './src/routes/teacherRouter.js';

const myApp = express();
const port = 3000;

connectMongoDB();
myApp.use(express.json());

myApp.use('/user', userRouter);


myApp.use('/teacher', teacherRouter);

// Use the router here

myApp.listen(port, () => {
    console.log(`Server is running on ${port}`);
});