const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir); // Directory to save images
    },
    filename: (req, file, cb) => {
        // Create a unique filename with timestamp
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

// Create the multer instance
const upload = multer({ storage });

// Route to upload an image
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }
    // Image upload success
    res.status(200).json({ message: 'Image uploaded successfully!', filename: req.file.filename });
});

// Route to get an image by filename
app.get('/image/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(uploadsDir, filename);

    // Check if file exists
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath); // Send the file as a response
    } else {
        res.status(404).json({ message: 'Image not found.' });
    }
});

// Serve the uploaded images
app.use('/uploads', express.static(uploadsDir));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
