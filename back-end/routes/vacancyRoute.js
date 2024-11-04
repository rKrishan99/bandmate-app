const express = require("express");
const {
  addVacancyController,
  updateVacancyController,
  deleteVacancyController,
  getAllVacancyController,
  getVacancyByCategoryController,
  getVacanciesByBandEmailController,
  getBandDataControler
  
} = require("../controllers/vacancyController");
const { route } = require("./authenticationRoute");

const router = express.Router();

router.get("/", getAllVacancyController);
router.get("/banddata/:email", getBandDataControler);
router.get("/:category", getVacancyByCategoryController);
router.get("/band/:email",getVacanciesByBandEmailController);
router.post("/", addVacancyController);
router.put("/", updateVacancyController);
router.delete("/:vacancyID", deleteVacancyController);

module.exports = router;
