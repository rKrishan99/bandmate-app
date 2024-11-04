const {updateUserService, deleteUserService} = require("../services/userService");

const deleteUserController = async (req, res) => {
  deleteUserService(req, res);
};

const updateUserController = async (req, res) => {
    updateUserService(req, res);
  };


module.exports={deleteUserController,updateUserController};