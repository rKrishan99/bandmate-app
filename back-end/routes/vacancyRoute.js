const express = require("express");
const {addVacancyController,updateVacancyController,deleteVacancyController,getAllVacancyController,getVacancyByCategoryController} = require('../controllers/vacancyController');
const { route } = require("./authenticationRoute");

const router = express.Router();

router.get('/',getAllVacancyController);
router.get('/:category',getVacancyByCategoryController);
router.post('/',addVacancyController);
router.put('/',updateVacancyController);
router.delete('/',deleteVacancyController);

module.exports = router;