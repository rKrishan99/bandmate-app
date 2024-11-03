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

const addApplication = async (applicationData) => {
  try {
    const query = `INSERT INTO application (vacancyID,title, description, priceMin, priceMax, createdAt, userEmail,name, about, experience, category, imgpath, phone, bandEmail, price) VALUES (?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      applicationData.vacancyID,
      applicationData.title,
      applicationData.description,
      applicationData.priceMin,
      applicationData.priceMax,
      applicationData.createdAt,
      applicationData.userEmail,
      applicationData.name,
      applicationData.about,
      applicationData.experience,
      applicationData.category,
      applicationData.imgpath,
      applicationData.phone,
      applicationData.bandEmail,
      applicationData.price,
    ];

    // Execute the query and get the result
    const [result] = await pool.query(query, values);

    // Log the inserted application data
    console.log("Application added:", applicationData);

    // Return the inserted data or insertId if needed
    return { id: result.insertId, ...applicationData };
  } catch (error) {
    console.error("Failed to add application:", error.message);
    throw error;
  }
};

const getApplicationsByBandEmail = async (bandEmail) => {
  try {
    const query = `SELECT * FROM application WHERE bandEmail = ?`;
    const [applications] = await pool.query(query, [bandEmail]);

    // Log the retrieved applications

    return applications; // Return all applications for the given email
  } catch (error) {
    console.error(
      "Failed to retrieve applications by user email:",
      error.message
    );
    throw error;
  }
};

const getApplicationsByUserEmail = async (userEmail) => {
  try {
    const query = `SELECT * FROM application WHERE userEmail = ?`;
    const [applications] = await pool.query(query, [userEmail]);

    // Log the retrieved applications
    console.log(`Applications for user ${userEmail}:`, applications);

    return applications; // Return all applications for the given email
  } catch (error) {
    console.error(
      "Failed to retrieve applications by user email:",
      error.message
    );
    throw error;
  }
};

module.exports = {
  addApplication,
  getApplicationsByBandEmail,
  getApplicationsByUserEmail,
};
