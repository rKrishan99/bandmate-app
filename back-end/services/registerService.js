const { addUser, getEmailAndPassword } = require('../config/userTableOperation');

const registerService = async (req, res) => {
    try {
        // Check if email is already registered
        const existingUser = await getEmailAndPassword(req.body.email);

        if (!existingUser) {
            // If not, add the user
            await addUser(req.body);
            // Send a 201 Created response with the user data (excluding sensitive information)
            res.status(201).json({ message: "User registered successfully", user: req.body });
        } else {
            // If the email is already registered, send a 409 Conflict response
            res.status(409).json({ message: "User with this email already exists" });
        }
    } catch (error) {
        // Handle any unexpected errors
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = registerService;
