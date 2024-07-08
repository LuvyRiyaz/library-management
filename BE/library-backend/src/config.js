const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  requireTLS: true,
  auth: {
    user: 'riyaz.ali@nulogic.io', // Replace with your email
    pass: 'smltmouzcyzxeinv',     // Replace with your password
  },
});

const sendNotification = async (email, bookTitle, dueDate, subject, message) => {
  const mailOptions = {
    from: 'riyaz.ali@nulogic.io',
    to: email,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });
};

module.exports = {
  PORT: 5000,
  MONGODB_URI: 'mongodb://0.0.0.0:27017/library',
  sendNotification,
};
