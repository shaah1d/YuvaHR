const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const allowedOrigins = ['https://yuvahr.com', 'https://www.yuvahr.com'];

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(cors({
   origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());

// mongoose.connect(process.env.DB_KEY)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('MongoDB connection error:', err));

const upload = multer({ dest: 'uploads/' });

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


app.post('/contact', upload.single('file'), (req, res) => {
    const { name, email, Message, field } = req.body;
    const resumePath = req.file.path;
    const resumeName = req.file.originalname;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.CLIENT_EMAIL,
        subject: `${field} - ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nField: ${field}\n\nMessage: ${Message}\nResume Path: ${resumePath}`,
        attachments: [
            {
                filename: resumeName,
                path: resumePath,
            },
        ],
    };
    const mailtopeople = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank You for Submitting Your Resume to YuvaHr Services',
        html: `
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for choosing YuvaHR Services as your trusted partner in your job search. We appreciate the time you’ve taken to submit your resume and are pleased to confirm that your application has been successfully recorded in our system.</p>
        <p>Our team will carefully review your qualifications and match them with the opportunities available across our network of esteemed companies. If your profile aligns with the requirements of our clients, we will reach out to you with further information.</p>
        <p>We understand that finding the right job is important, and we’re committed to assisting you every step of the way. Rest assured, if you are shortlisted for any position, you will hear from us promptly.</p>
        <p>Thank you once again for your trust in YuvaHR Services. We look forward to the possibility of helping you find your next great opportunity.</p>
        <p>Best regards,</p>
        <p><strong>YuvaHR Services</strong></p>
    `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Failed to submit form.');
        } else {
            console.log('Email sent: ' + info.response);

            fs.unlinkSync(resumePath);
            res.status(200).send('Form submitted successfully.');
        }
    });
    transporter.sendMail(mailtopeople, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Failed to submit form.');
        } else {
            console.log('Email sent: ' + info.response);

            fs.unlinkSync(resumePath);
            res.status(200).send('Form submitted successfully.');
        }
    });
});





app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
});

