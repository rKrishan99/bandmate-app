const {
    deleteUser,
    getUserByEmail,
    updateUser
  } = require("../config/userTableOperation");

  const {deleteVacanciesByBandEmail} = require("../config/vacancyTableOperation");

  const {deleteApplicationsByEmail} = require("../config/applicationTableOperation");

  const deleteUserService = async (req, res) => {
    try {
      // Retrieve email from request parameters
      const email = req.params.email;
  
      // Check if the user exists
      const existingUser = await getUserByEmail(email);
      if (!existingUser) {
        // If the user does not exist, send a 404 Not Found response
        return res.status(404).json({ message: "User not found" });
      }
  
      // If the user exists, delete the user
      await deleteUser(email);
      await deleteVacanciesByBandEmail(email);
      await deleteApplicationsByEmail  (email);


      // Send a 200 OK response with a success message
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error deleting user:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const updateUserService = async (req, res) => {
    try {
      // Retrieve the complete user data from the request body
      const userData = req.body;
      const email = userData.email;
  
      // Check if the user exists by email
      const existingUser = await getUserByEmail(email);
      
      if (!existingUser) {
        // If the user does not exist, send a 404 Not Found response
        return res.status(404).json({ message: "User not found" });
      }
  
      // Update the user with the new data
      const updateResult = await updateUser(userData);
      
      // Send a 200 OK response with the update message
      res.status(200).json(updateResult);
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error updating user:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  module.exports={deleteUserService, updateUserService}