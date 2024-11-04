const express = require("express");
const {
  addApplicationController,
  getApplicationController,
  deleteApplicationByID
} = require("../controllers/applicationController");
const router = express.Router();

router.post("/", addApplicationController);
router.get("/:type/:email", getApplicationController);
router.delete("/:applicationID",deleteApplicationByID);

module.exports = router;
