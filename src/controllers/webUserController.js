import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { WebUser } from '../Schema/model.js';

import { secretKey } from '../utils/constant.js';
import { sendEmail } from '../utils/sendMail.js';

export const createWebUserController = async (req, res, next)=>  {
   

try {
    let data =  req.body;
    // console.log(req.body);

    let password = req.body.password;

    let hashedPassword=  await bcrypt.hash(password, 10);
    data = {
        ...data,
        password: hashedPassword,
        isVerifiedEmail: false,
    };
    // console.log(data);
    let result = await WebUser.create(data);

    let infoObj = {
        _id: result._id,
    };

    let expiryInfo = {
        expiresIn: "1d",
    };
  
    let token = jwt.sign(infoObj, secretKey, expiryInfo);

    await sendEmail({
        to: data.email, 
        subject: "Registration Successful", 
        html: `<h1>Your account has been created successfully</h1>
        <a href="http://localhost:3000/verify-email? token=${token}">"http://localhost:3000/verify-email? token=${token}</a>`,
    })

    res.json({
        success: true,
        message: "User Created Successfully",
        result: result,
    })
    
} catch (error) {
    res.json({
        success:false,
        message: error.message,
    })
}

}

export const verifyEmail = async (req, res, next) => {
    try {
        let tokenString = req.headers.authorization;
        // console.log(tokenString);
        let tokenArray = tokenString.split(" ");
        // console.log(tokenArray);
        let token = tokenArray[1];
        console.log(token)

        let infoObj = jwt.verify(token, secretKey);
        console.log(infoObj);
        let userId = infoObj._id;

        let result = await WebUser.findByIdAndUpdate(userId,{isVerifiedEmail:true});
        res.json ({
            success: true,
            message: "Email Verified Successfully",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }

}

export const loginWebUser = async (req, res, next) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let user = await WebUser.findOne({email: email});

        if (!user) {
            throw new Error("Invalid credentials"); // User not found
        }

        // Assuming isVerifiedEmail is a property of the user object
        if (!user.isVerifiedEmail) {
            throw new Error("Email not verified"); // Email not verified
        }

        let isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw new Error("Invalid credentials"); // Password doesn't match
        }

        // Token generation
        let infoObj = {
            _id: user._id,
        };
        let expiryInfo = {
            expiresIn: "30d",
        };

        // Assuming secretKey is defined elsewhere in your application
        let token = await jwt.sign(infoObj, secretKey, expiryInfo);

        res.json({
            success: true,
            message: "Login Successful",
            token: token, // Include token in the response
            result: user,
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
}

export const readWebUserController = async (req, res, next) => {
    try {
        let result = await WebUser.find({});
        res.json({
            success: true,
            message: "WebUser read successfully",
            result: result,
        });
    }
    catch(error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
}

export const readSpecificWebUserController = async (req,res,next) => {
    try {
        let result= await WebUser.findById(req.params.id)
        res.json({
            success:true,
            message:"webuser read successfully",
            result:result,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        });
    };
};


export const updateSpecificWebUserController =  async(req, res, next) => {
    try {
        let id = req.params.id;
        let data = req.body;

        delete data.email;
        delete data.password;

        // const dataToUpdate = {
        //     fullName:req.body.fullName,
        //     dob:req.body.dob,
        //     gender: req.body.gender
        // }
        let result  = await WebUser.findByIdAndUpdate(id, data, {new:true});
    
        res.json({
            success: true,
            message: "WebUser updated successfully",
            result: result,
        });
        
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
    
        });
    }
   

  
    
}

export const deleteWebUserController = async(req, res, next) => {
    try {
        let result = await WebUser.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "WebUser deleted Successfully",
            result:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}
