const {
  testDatabaseConnection,
  addVacancy,
  updateVacancy,
  getAllVacancies,
  getVacanciesByCategory,
  deleteVacancyById,
  getVacancyByID,
  getVacanciesByBandEmail,
  getBandDetailsById
} = require("../config/vacancyTableOperation");

const{deleteApplicationsByVacancyID} = require("../config/applicationTableOperation")

const addVacancyService = async (req, res) => {
  try {
    const vacancyData = req.body;
    await addVacancy(vacancyData);
    res.status(201).json(vacancyData);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateVacancyService = async (req, res) => {
  try {
    const vacancyData = req.body;

    if (getVacancyByID) {
      await updateVacancy(vacancyData);
      res.status(200).json({ message: "Vacancy Updated" });
    } else {
      res.status(404).json({ message: "ID not found!" });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteVacancyService = async (req, res) => {
  try {
    const vacancyID = req.params.vacancyID;
    console.log(vacancyID);
    const vacancy = await getVacancyByID(vacancyID);
    if (vacancy) {
      
      await deleteVacancyById(vacancyID);
      await deleteApplicationsByVacancyID(vacancyID);
      res.status(200).json({ message: "Vacancy deleted!" });

    } else {
      res.status(404).json({ message: "Vacancy not found!" });
    }
  } catch (error) {
    console.error("Error deleting vacancy:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllVacanciesService = async (req, res) => {
  try {
    const vacancies = await getAllVacancies();
    res.status(200).json(vacancies);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getVacancyByCategoryService = async (req, res) => {
  try {
    const category = req.params.category;
    const vacancies = await getVacanciesByCategory(category);
    res.status(200).json(vacancies);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getVacancyByBandEmailService = async (req, res) => {
  try {
    const email = req.params.email;
    const vacancies = await getVacanciesByBandEmail(email);
    res.status(200).json(vacancies);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBandDetailsService = async (req, res) => {
  try {
    const email = req.params.email;
    const users = await getBandDetailsById(email);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addVacancyService,
  getAllVacanciesService,
  getVacancyByCategoryService,
  updateVacancyService,
  deleteVacancyService,
  getVacancyByBandEmailService,
  getBandDetailsService
};
