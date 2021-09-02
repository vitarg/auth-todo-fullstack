const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    text: String,
    complete: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
