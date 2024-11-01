const express = require('express');
const { addVacancy,updateVacancy,getAllVacancies,getVacanciesByCategory,deleteVacancyById,getVacancyByID } = require('./config/vacancyTableOperation');
const {testDatabaseConnection} = require('./config/vacancyTableOperation');

const authRoute = require('./routes/authenticationRoute');
const vacancyRoute = require('./routes/vacancyRoute');
const applicationRoute = require('./routes/applicationRoute');

const app = express();
app.use(express.json());


app.use("/auth", authRoute);
app.use("/vacancy",vacancyRoute);
app.use("/aplication",applicationRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
