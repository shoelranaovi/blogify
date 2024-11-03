const transporter = require("./nodemailer");
const jwt = require("jsonwebtoken");

const sendMagicLink = async (user) => {
  // Generate a token
  const tokendata = {
    id: user._id,
    email: user.email,
  };
  const token = jwt.sign(tokendata, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  // Create the magic link
  const link = `http://localhost:3000/api/auth/verifyforlogin?token=${token}`;

  // Send the email
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Your Magic Link",
    text: `Click here to sign in: ${link}`,
  });
};

module.exports = sendMagicLink;
