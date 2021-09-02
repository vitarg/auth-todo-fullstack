const Todo = require("../models/Todo.model");

module.exports.todosController = {
  addTodo: async (req, res) => {
    try {
      await Todo.create({
        text: req.body.text,
        complete: false,
        user: req.body.user,
      });

      res.json("Дело добавлено");
    } catch (e) {
      console.log(e);
    }
  },
};
