import { Router } from "express";
import { createUserController, readSpecificUserController, readUserController } from "../controllers/userController.js";

let userRouter = Router()

userRouter.route("/").post(createUserController).get(readUserController);

//Dynamic routes

userRouter.route("/:id").get(readSpecificUserController);


export default userRouter;
