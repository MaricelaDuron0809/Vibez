
const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/auth/auth/profile", require("./post"));

module.exports = router;

