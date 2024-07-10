import jwt from "jsonwebtoken";

let infoObj = {
    id: "1234",
};

let secretKey = "n9Solution";

let expiryDate = {
    expiresIn: "1d",
};

//generate token 
let token = jwt.sign(infoObj, secretKey, expiryDate);
console.log(token);

let token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE3MjA1MDUxODAsImV4cCI6MTcyMDU5MTU4MH0.dzLpgSEHwoNoKSvBKxxR549NSa92pAkAVYmOEuOpd1g";

try {
    let infoObj = jwt.verify(token1, "n9Solution");
    console.log(infoObj);
    
} catch (error) {
    console.log(error.message);
    
}