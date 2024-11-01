const { addUser, getEmailAndPassword, getUserByEmail } = require('../config/userTableOperation');

const loginService = async (req, res) => {
    try {
        // Retrieve user data by email
        const loginData = await getEmailAndPassword(req.body.email);

        if (loginData) {
            // Directly compare the provided password with the stored password
            if (req.body.password === loginData.password) {
                // Retrieve user data without sensitive information
                const { password, ...userData } = await getUserByEmail(req.body.email);
                res.status(200).json(userData);
            } else {
                res.status(401).json({ message: "Incorrect password" });
            }
        } else {
            res.status(404).json({ message: "Email not found! If you are a new user, please register." });
        }
    } catch (error) {
        // Handle any unexpected errors
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = loginService;
