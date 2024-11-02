const express = require("express");
const morgan = require("morgan"); // For logging
const authRoute = require("./routes/authenticationRoute");
const vacancyRoute = require("./routes/vacancyRoute");
const applicationRoute = require("./routes/applicationRoute");
const imageRouter = require("./routes/imageRouter");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/auth", authRoute);
app.use("/vacancy", vacancyRoute);
app.use("/application", applicationRoute);
app.use('/images', imageRouter);
app.use('/uploads', express.static(require('./services/imageService').uploadsDir));

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: 'Internal Server Error' });
});

// Server initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
