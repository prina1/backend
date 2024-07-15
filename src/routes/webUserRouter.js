import { Router } from "express";
import { createWebUserController, deleteWebUserController, loginWebUser, readSpecificWebUserController, readWebUserController, updateSpecificWebUserController, verifyEmail } from "../controllers/webUserController.js";

let WebUserRouter= Router();
WebUserRouter.route('/').post(createWebUserController).get(readWebUserController);
//Dynamic routes
WebUserRouter.route('/:id').get(readSpecificWebUserController);

WebUserRouter.route('/:id').patch(updateSpecificWebUserController).delete(deleteWebUserController);
WebUserRouter.route('/verify-email').post(verifyEmail);
WebUserRouter.route('/login', loginWebUser).post(loginWebUser);



export default WebUserRouter;
