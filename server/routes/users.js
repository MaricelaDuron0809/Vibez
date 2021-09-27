const router = require("express").Router();
const { users } = require("../controllers")
const { requireLogin } = require("../middleware/auth");

//find  all users
router.get("/users", requireLogin, );

router.get("/users/:id", requireLogin, );

//register user
router.post("/register", );

// login user
router.post("/login", );

router.get("/", requireLogin, );
router.get("/", );
router.post("/", );

module.exports = router;
