const mysql = require("mysql2/promise"); // Use mysql2 with promise support

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
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

const addVacancy = async (applicationData) => {
    try {
      const query = `INSERT INTO application (vacancyID,userEmail,price) VALUES (?, ?, ?) `;
      const values = [
        applicationData.vacancyID,
        applicationData.userEmail,
        applicationData.price
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

  module.exports={addVacancy};