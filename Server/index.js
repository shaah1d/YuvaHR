const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(cors({
    origin: 'http://localhost:5173'
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
});


// app.get('/users', async (req, res) => {
//     try {
//         const items = await User.find();
//         res.json(items);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// app.get('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     const item = await User.findById(id);
//     res.json(item);
// });


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
});
