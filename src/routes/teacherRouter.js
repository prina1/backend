import { Router } from "express";
import { createTeacherController } from "../controllers/teacherController.js";

let teacherRouter = Router()
teacherRouter.route("/").post(createTeacherController);

export default teacherRouter;
