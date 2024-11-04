const { getBandDetailsById } = require("../config/vacancyTableOperation");
const {
  addVacancyService,
  getAllVacanciesService,
  getVacancyByCategoryService,
  deleteVacancyService,
  updateVacancyService,
  getVacancyByBandEmailService,
  getBandDetailsService

} = require("../services/vacancyService");

const addVacancyController = async (req, res) => {
  addVacancyService(req, res);
};

const getAllVacancyController = async (req, res) => {
  getAllVacanciesService(req, res);
};

const getVacancyByCategoryController = async (req, res) => {
  getVacancyByCategoryService(req, res);
};

const updateVacancyController = async (req, res) => {
  updateVacancyService(req, res);
};

const deleteVacancyController = async (req, res) => {
  deleteVacancyService(req, res);
};

const getVacanciesByBandEmailController = async (req,res) => {
   getVacancyByBandEmailService(req,res);
}

const getBandDataControler = async (req,res) => {
  getBandDetailsService(req,res);
}

module.exports = {
  addVacancyController,
  getAllVacancyController,
  getVacancyByCategoryController,
  updateVacancyController,
  deleteVacancyController,
  getVacanciesByBandEmailController,
  getBandDataControler
};
