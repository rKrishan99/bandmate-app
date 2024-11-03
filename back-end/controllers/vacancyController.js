const {
  addVacancyService,
  getAllVacanciesService,
  getVacancyByCategoryService,
  deleteVacancyService,
  updateVacancyService,
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

module.exports = {
  addVacancyController,
  getAllVacancyController,
  getVacancyByCategoryController,
  updateVacancyController,
  deleteVacancyController,
};
