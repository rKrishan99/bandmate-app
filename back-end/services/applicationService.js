const {
  addApplication,
  getApplicationsByBandEmail,
  getApplicationsByUserEmail,
} = require("../config/applicationTableOperation");

const addApplicationService = async (req, res) => {
  try {
    const applicationData = req.body;
    const addedData = await addApplication(applicationData);
    if (addedData) {
      res.status(201).json(addedData);
    }
  } catch (error) {
    console.error("Error adding vacancy:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getApplicationByBand = async (req, res) => {
  try {
    const bandEmail = req.params.email;
    const applicationData = await getApplicationsByBandEmail(bandEmail);
    res.status(200).json(applicationData);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getApplicationByPlayer = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const applicationData = await getApplicationsByUserEmail(userEmail);
    res.status(200).json(applicationData);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addApplicationService,
  getApplicationByBand,
  getApplicationByPlayer,
};
