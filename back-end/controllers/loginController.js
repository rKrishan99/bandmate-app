const loginService = require("../services/loginService");

const loginController = async (req, res) => {
  loginService(req, res);
};

module.exports = loginController;
