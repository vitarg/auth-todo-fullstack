const { Router } = require("express");
const { todosController } = require("../controllers/todos.controller");

const router = Router();

router.post("/todos", todosController.addTodo);
// router.get("/todos", todosController.getAllTodos);
// router.patch("/todos", todosController.editTodo);
// router.delete("/todos", todosController.removeTodo);

module.exports = router;
