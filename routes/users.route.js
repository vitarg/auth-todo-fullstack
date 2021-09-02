const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router()


router.post('/registration', usersController.registerUser)
router.get('/login', usersController.loginUser)

module.exports = router