const express = require("express");
const errorHandler = require("../middleware/errorhandler");
const authController = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyuser");
const transporter = require("../confiq/nodemailer");
const sendMagicLink = require("../confiq/sendMagic");
authController.post("/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return next(errorHandler(400, "plz provide your details"));
    }
    if (username !== username.toLowerCase()) {
      return next(errorHandler(400, "plz provide your details"));
    }
    const pattren = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //check the pattern
    if (!email.match(pattren)) {
      return next(errorHandler(400, "plz provide valid email"));
    }
    if (username.length <= 4) {
      return next(errorHandler(400, "username should be 8 charactor or more"));
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const payload = {
      username,
      email,
      password: hash,
    }; //  create user using payload

    const newUser = new User(payload); ///create user user model
    const saveUser = await newUser.save();
    res.status(200).json({
      message: "user create successfull",
      data: saveUser,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    return next(errorHandler(300, error.message));
  }
});
authController.post("/sign-in", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return next(errorHandler(400, "plz provide your information"));
    }
    const finduser = await User.findOne({ email });
    if (!finduser) {
      return next(errorHandler(400, "plz provide valid email"));
    } else {
      const comparePass = await bcrypt.compareSync(password, finduser.password);
      if (!comparePass) {
        return next(errorHandler(400, "plz provide correct Password"));
      }

      const tokendata = {
        id: finduser._id,
        email: finduser.email,
        role: finduser.role,
      };
      const token = jwt.sign(tokendata, process.env.SECRET_KEY, {
        expiresIn: "30d",
      });
      const user = await User.findOne({ email }).select("-password");
      const tokenoption = {
        expires: new Date(Date.now() + 604800000),
        httpOnly: true,
        securce: true,
      };
      res.status(201).cookie("token", token, tokenoption).json({
        message: "successfully login",
        data: user,
        success: true,
        error: false,
      });
    }
  } catch (error) {
    console.log(error);
    return next(errorHandler(400, error.message));
  }
});
authController.get("/verifyUser", verifyToken, async (req, res, next) => {
  const user = req.user;
  try {
    const finduser = await User.findById(user.id).select("-password");
    // const userinfromation = {
    //   id: finduser._id,
    //   username: finduser.username,
    //   email: finduser.email,
    //   role: finduser.role,
    // };
    res.status(201).json({
      message: "successfully login",
      data: finduser,
      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    next(errorHandler());
  }
});
authController.get("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token").json({
      message: "your are sign out",

      success: true,
      error: false,
    });
  } catch (error) {
    console.log(error);
    next(errorHandler());
  }
});
authController.post("/userCreateWithmagiclink", async (req, res) => {
  const { email } = req.body;
  console.log(email);

  // Check if user already exists
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).send("User already exists");
  }

  // Create a new user
  user = new User({ email });
  await user.save();

  // Generate a token
  const token = jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: "15m",
  });

  // Create the magic link
  const link = `http://localhost:3000/api/auth/verify?token=${token}`;

  // Send the email
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Magic Link",
    text: `Click here to sign in: ${link}`,
  });

  res.status(200).json({
    message: "Magic link sent to your email",
    success: true,
    error: false,
  });
});
authController.get("/verify", async (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).send("No token provided");
  }

  jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
    if (err) {
      return res.status(400).send("Invalid token");
    }

    const { email } = decoded;

    // Mark the user as verified
    const user = await User.findOne({ email });
    if (user) {
      user.verify = true;
      await user.save();
      const tokenoption = {
        expires: new Date(Date.now() + 604800000),
        httpOnly: true,
        securce: true,
      };

      res.status(201).cookie("token", token, tokenoption);
      return res.send('<a href="http://localhost:5173/">Login here</a>');
    } else {
      return res.status(400).send("User not found");
    }
  });
});
authController.post("/magiclogin", async (req, res) => {
  const { email } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("User does not exist. Please sign up first.");
  }

  // Generate and send magic link
  sendMagicLink(user);
  res.send("Magic link sent to your email!");
});

// Function to generate and send magic link

module.exports = authController;
