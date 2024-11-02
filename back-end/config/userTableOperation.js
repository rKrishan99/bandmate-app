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

const getEmailAndPassword = async (email) => {
  try {
    const query = `SELECT email, password FROM users WHERE email = ?`;
    const [rows] = await pool.query(query, [email]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Failed to retrieve user credentials:", error.message);
    throw error;
  }
};

const addUser = async (userData) => {
  try {
    const query = `INSERT INTO users (email, password, type, name, about, experience, category, imgpath, phone)
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      userData.email,
      userData.password,
      userData.type,
      userData.name,
      userData.about,
      userData.experience,
      userData.category,
      userData.imgpath,
      userData.phone,
    ];

    await pool.query(query, values, (error, results) => {
      if (error) {
        console.error(error);
      } else {
        res.status(201).json({ message: "User added successfully" });
      }
    });
  } catch (error) {
    console.error("Failed to retrieve user credentials:", error.message);
    throw error;
  }
};

const updateUser = async (userData) => {
  try {
    const query = `
            UPDATE users 
            SET name = ?, about = ?, experience = ?, category = ?, imgpath = ?, phone = ?
            WHERE email = ?`;

    const values = [
      userData.name,
      userData.about,
      userData.experience,
      userData.category,
      userData.imgpath,
      userData.phone,
      userData.email,
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

const deleteUser = async (email) => {
  try {
    const query = `DELETE FROM users WHERE email = ?`;
    const [result] = await pool.query(query, [email]);
    if (result.affectedRows > 0) {
      console.log(`User with email ${email} deleted successfully.`);
      return { message: "User deleted successfully" };
    } else {
      console.log(`No user found with email ${email}.`);
      return { message: "User not found" };
    }
  } catch (error) {
    console.error("Failed to delete user:", error.message);
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const query = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await pool.query(query, [email]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Failed to retrieve user data:", error.message);
    throw error;
  }
};

module.exports = {
  testDatabaseConnection,
  getEmailAndPassword,
  addUser,
  updateUser,
  deleteUser,
  getUserByEmail,
};
