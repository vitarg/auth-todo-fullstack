const bcrypt = require("bcrypt");
const User = require("../models/User.model");


module.exports.usersController = {
  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body;

      const hash = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));

      await User.create({
        login,
        password: hash,
      });

      res.json("Пользователь успешно зарегистрирован");
    } catch (e) {
      console.log(e);
    }
  },
  // eslint-disable-next-line consistent-return
  loginUser: async (req, res) => {
    try {
      const { login, password } = req.body;

      const candidate = await User.findOne({ login });

      if (!candidate) return res.status(401).json("Неверный логин");

      const valid = await bcrypt.compare(password, candidate.password)

      if (!valid) return res.status(401).json("Неверный пароль");

      res.json(candidate)
    } catch (e) {
      console.log(e);
    }
  },
};
