//Hashing 

import bcrypt from 'bcrypt'; 
let password = "password@123";
let hashedPassword = await  bcrypt.hash(password, 10);

console.log(hashedPassword);


//compare a hash code
let loginPassword = "password@123";
let isValidPassword = await bcrypt.compare(loginPassword, hashedPassword);
console.log(isValidPassword);
