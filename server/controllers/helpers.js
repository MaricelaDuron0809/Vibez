const jwt = require("jsonwebtoken");
// Add the SECRET
const SECRET = process.env.JWT_SECRET;

function createJWT(user) {
    return jwt.sign(
        { user }, // data payload
        SECRET,
        { expiresIn: "24h" }
    );
}

module.exports = createJWT;