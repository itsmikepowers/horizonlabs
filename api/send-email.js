// api/send-email.js
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD, 
      },
    });

    const mailOptions = {
      from: email,
      to: 'mikepowersofficial@gmail.com',
      subject: `Contact from ${name} (${email})`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully!');
    } catch (error) {
      res.status(500).send('Error sending email.');
    }
  } else {
    res.status(405).send('Method not allowed.');
  }
};
