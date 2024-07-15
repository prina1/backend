import { Teacher } from "../Schema/model.js";

export const createTeacherController = async (req, res, next) => {
    try {
        console.log(req.body);
        let data = await Teacher.create(req.body);

        res.status(200).json({
            status: true,
            message: "Teacher Created Successfully",
            result: data,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
        
    }

}

