import nodemailer from 'nodemailer';

// Configuration for the transporter
let transporterConfig = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "prinawaiba111@gmail.com", // your email
        pass: "zopq dupn xhrs vlol" // your email password
    },
};

export const sendEmail = async (mailInfo) => {
    try {
        // Create a transporter using the configuration
        let transporter = nodemailer.createTransport(transporterConfig);

        // Sending email
        let info = await transporter.sendMail(mailInfo); // Corrected method name to sendMail

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.log("Error has occurred", error.message);
    }
}
