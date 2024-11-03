// imageRouter.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const {uploadImage, sendImage} = require('../controllers/imageController');
const imageService = require('../services/imageService');

const router = express.Router();

// Set up multer storage (as before)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imageService.uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Route for image upload
router.post('/upload', upload.single('image'), uploadImage);

// Route for retrieving images
router.get('/:filename', sendImage);

module.exports = router;
