const express = require("express");
const {addApplicationController,getApplicationController} = require('../controllers/applicationController')
const router = express.Router();

router.post('/',addApplicationController);
router.get('/:type/:email',getApplicationController);

module.exports = router;