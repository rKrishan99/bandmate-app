const express = require('express');
const { testDatabaseConnection, getEmailAndPassword, addUser, updateUser,deleteUser } = require('./config/userTableOperation');

const authRoute = require('./routes/authenticationRoute') 
const app = express();
app.use(express.json());

testDatabaseConnection();

app.use("/auth", authRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
