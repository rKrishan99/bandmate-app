const {
  addApplication,
  getApplicationsByBandEmail,
  getApplicationsByUserEmail,
  deleteApplication,
  getApplicationsByID
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

const deleteApplicationByID = async (req, res) => {
  try {
    const applicationID = req.params.applicationID;

    const application = await getApplicationsByID(applicationID);
    if (application) {
      await deleteApplication(applicationID);
      res.status(200).json({ message: "Application deleted!" });
    } else {
      res.status(404).json({ message: "Application not found!" });
    }
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



module.exports = {
  addApplicationService,
  getApplicationByBand,
  getApplicationByPlayer,
  deleteApplicationByID,
};
