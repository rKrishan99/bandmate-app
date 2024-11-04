const express = require("express");
const {deleteUserController, updateUserController} = require('../controllers/userController');

const router = express.Router();

router.delete("/:email", deleteUserController);
router.put("/", updateUserController);

module.exports = router;
