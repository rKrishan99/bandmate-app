const mysql = require("mysql2/promise"); // Use mysql2 with promise support

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bandmate",
  connectionLimit: 10,
});

const testDatabaseConnection = async () => {
  try {
    const [rows, fields] = await pool.query("SELECT 1");
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

const addVacancy = async (vacancyData) => {
  try {
    const query = `INSERT INTO vacancy (category, title, description, bandemail, priceMin, priceMax) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
      vacancyData.category,
      vacancyData.title,
      vacancyData.description,
      vacancyData.bandemail,
      vacancyData.priceMin,
      vacancyData.priceMax,
    ];

    await pool.query(query, values, (error, results) => {
      if (error) {
        return error;
      } else {
        return vacancyData;
      }
    });
  } catch (error) {
    console.error("Failed to retrieve vacancy credentials:", error.message);
    throw error;
  }
};

const updateVacancy = async (vacancyData) => {
  try {
    const query = `
                UPDATE vacancy 
                SET category = ?, title = ?, description = ?, bandemail = ?, priceMin = ?, priceMax = ?
                WHERE vacancyID = ?`;

    const values = [
      vacancyData.category,
      vacancyData.title,
      vacancyData.description,
      vacancyData.bandemail,
      vacancyData.priceMin,
      vacancyData.priceMax,
      vacancyData.vacancyID,
    ];

    const [result] = await pool.query(query, values);
    return result.affectedRows > 0
      ? { message: "User updated successfully" }
      : { message: "User not found" };
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
};

const getAllVacancies = async () => {
  try {
    const query = "SELECT * FROM vacancy";
    const [results] = await pool.query(query);
    return results;
  } catch (error) {
    console.error("Error fetching vacancies:", error.message);
    throw error;
  }
};

const getVacanciesByCategory = async (category) => {
  try {
    const query = "SELECT * FROM vacancy WHERE category = ?";
    const [results] = await pool.query(query, [category]);
    return results;
  } catch (error) {
    console.error("Error fetching vacancies by category:", error.message);
    throw error;
  }
};

const getVacancyByID = async (vacancyID) => {
  try {
    const query = "SELECT * FROM vacancy WHERE vacancyID = ?";
    const [results] = await pool.query(query, [vacancyID]);
    return results;
  } catch (error) {
    console.error("Error fetching vacancies by category:", error.message);
    throw error;
  }
};

const deleteVacancyById = async (vacancyID) => {
  try {
    const query = "DELETE FROM vacancy WHERE vacancyID = ?";
    const [result] = await pool.query(query, [vacancyID]);

    if (result.affectedRows === 0) {
      return { message: "Vacancy not found", success: false };
    }
    console.log("Vacancy deleted successfully.");
    return { message: "Vacancy Deleted", success: true };
  } catch (error) {
    console.error("Error deleting vacancy:", error.message);
    throw error;
  }
};

module.exports = {
  testDatabaseConnection,
  addVacancy,
  updateVacancy,
  getAllVacancies,
  getVacanciesByCategory,
  deleteVacancyById,
  getVacancyByID,
};
