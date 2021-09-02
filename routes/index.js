const { Router } = require("express");

const router = Router();

router.use(require("./users.route"));
router.use(require("./todos.route"));

module.exports = router;
