// imageController.js
const imageService = require('../services/imageService');
const {updateImage} = require('../config/userTableOperation')
// Handle image upload
const uploadImage = (req, res) => {
    const email = req.body.email; // Retrieve email from request body

    if (!req.file) {
       res.status(400).json({ message: 'No file uploaded.' });
       return
    }
    
    try {
        const filename = imageService.saveImage(req.file);
        updateImage(email,filename);
        res.status(200).json({ message: 'Image uploaded successfully!', filename });
        return
    } catch (error) {
        res.status(500).json({ message: 'Error saving image.' });
    }
};


// Handle sending the image file
const sendImage = (req, res) => {
    const filename = req.params.filename;
    const imagePath = imageService.getImagePath(filename);
    console.log(imagePath);
    if (!imagePath) {
        return res.status(404).json({ message: 'File not found.' });
    }
    res.sendFile(imagePath);
    return
    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(500).json({ message: 'Error sending the file.' });
        }
    });
};

module.exports = { uploadImage, sendImage };
