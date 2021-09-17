const User = require("../models/user");

// Index - GET - Presentational (all of one resource)
const index = async (req, res) => {
    const users = await User.find({});
    console.log(users);
    res.json(users);
};

module.exports = { index};