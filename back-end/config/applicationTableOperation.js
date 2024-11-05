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

const getApplicationsByID = async (applicationID) => {
  try {
    const query = `SELECT * FROM application WHERE applicationID = ?`;
    const [applications] = await pool.query(query, [applicationID]);

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

const deleteApplication = async (applicationID) => {
  try {

    const query = "DELETE FROM application WHERE applicationID = ?";
    const [result] = await pool.query(query, [applicationID]);

    if (result.affectedRows === 0) {
      return { message: "Application not found", success: false };
    }
    console.log("Application deleted successfully.");
    return { message: "Application Deleted Deleted", success: true };
  } catch (error) {
    console.error("Error deleting application:", error.message);
    throw error;
  }
};

const deleteApplicationsByEmail = async (email) => {
  try {
    const query = "DELETE FROM application WHERE userEmail = ? OR bandEmail = ?";
    const [result] = await pool.query(query, [email, email]);

    if (result.affectedRows === 0) {
      return { message: "No applications found for this email", success: false };
    }
    console.log(`Deleted ${result.affectedRows} applications for email ${email}.`);
    return { message: "Applications deleted successfully", success: true, deletedCount: result.affectedRows };
  } catch (error) {
    console.error("Error deleting applications for email:", error.message);
    throw error;
  }
};

const deleteApplicationsByVacancyID = async (vacancyID) => {
  try {
    const query = "DELETE FROM application WHERE vacancyID = ?";
    const [result] = await pool.query(query, [vacancyID]);

    if (result.affectedRows === 0) {
      return { message: "No applications found for this vacancy ID", success: false };
    }
    console.log(`Deleted ${result.affectedRows} applications for vacancy ID ${vacancyID}.`);
    return { message: "Applications deleted successfully", success: true, deletedCount: result.affectedRows };
  } catch (error) {
    console.error("Error deleting applications by vacancy ID:", error.message);
    throw error;
  }
};

module.exports = {
  addApplication,
  getApplicationsByBandEmail,
  getApplicationsByUserEmail,
  deleteApplication,
  getApplicationsByID,
  deleteApplicationsByEmail,
  deleteApplicationsByVacancyID
};
