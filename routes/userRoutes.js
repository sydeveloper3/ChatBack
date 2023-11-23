
const router = require("express").Router();

const { register, login ,setAvatar,getAllUsers} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get('/alluser/:id',getAllUsers);
module.exports = router;
