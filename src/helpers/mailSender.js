const nodemailer = require('nodemailer');

// Create a Nodemailer transporter using SMTP details from cPanel
const transporter = nodemailer.createTransport({
    host: 'your_smtp_host', // SMTP server provided by cPanel
    port: 465, // SMTP port (usually 465 for SSL)
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'your_email@example.com', // Your email address
        pass: 'your_email_password' // Your email password or application-specific password
    }
});

// Function to send email
const sendEmail = async (mail, mobile, description) => {
    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'your_email@example.com', // sender address
            to: 'recipient@example.com', // list of receivers
            subject: 'New Contact Form Submission', // Subject line
            text: `Email: ${mail}\nMobile: ${mobile}\nDescription: ${description}` // Plain text body
        });

        console.log('Email sent: ', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending email: ', error);
        return false;
    }
};

module.exports = { sendEmail };
