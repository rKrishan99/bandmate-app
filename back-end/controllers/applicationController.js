const {
  addApplicationService,
  getApplicationByBand,
  getApplicationByPlayer,
  deleteApplicationByID
} = require("../services/applicationService");

const addApplicationController = async (req, res) => {
  addApplicationService(req, res);
};

const getApplicationController = async (req, res) => {
  const type = req.params.type;

  if (type == "band") {
    getApplicationByBand(req, res);
  } else if (type == "player") {
    getApplicationByPlayer(req, res);
  }
};

const deleteApplicationController = async (req, res) => {
  deleteApplicationByID(req,res);
};

module.exports = { addApplicationController, getApplicationController, deleteApplicationByID };
