const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const index = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(err);
  }
};

const allUser = async (req, res) => {
  const user = await User.find(req.params).select("-password").select("-email");
  try {
    if (user) {
      return res.status(200).json(user);
    }
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err.message);
  }
};

const userById = async (req, res) => {
  const user = await User.findById({ _id: req.params.id })
    .select("-password")
    .select("-email");
  try {
    if (user) {
      return res.status(200).json(user);
    }
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err.message);
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashed_password = await bcrypt.hash(password, 10);
    user = new User({
      name,
      email,
      password: hashed_password,
    });
    await user.save();
    return res.status(201).json({ message: "User successfully created" });
  } catch (err) {
    console.log(err.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "User not found" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });
    return res.status(200).json(token);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  login: login,
  register: register,
  
}