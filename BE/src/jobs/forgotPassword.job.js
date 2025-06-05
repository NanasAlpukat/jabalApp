const nodemailer = require('nodemailer');

module.exports = async function (job) {
  const { email, token } = job.data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"App Sekolah" <no-reply@sekolah.com>',
    to: email,
    subject: 'Reset Password',
    html: `<a href="${process.env.FRONTEND_URL}/reset-password/${token}">Klik untuk reset password</a>`,
  });
};
