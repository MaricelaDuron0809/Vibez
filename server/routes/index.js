const { isLoggedIn } = require("../middleware/auth");
const router = require("express").Router();


router.use("/auth/users", require("./users"));
router.use('/auth/comments', isLoggedIn, require('./comments'))

module.exports = router;
