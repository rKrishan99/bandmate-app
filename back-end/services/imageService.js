const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const saveImage = (file) => {
    const newFilePath = path.join(uploadsDir, file.filename);
    fs.renameSync(file.path, newFilePath); // Move file to uploads directory
    return file.filename;
};

const getImagePath = (filename) => {
    const filePath = path.join(uploadsDir, filename);
    return fs.existsSync(filePath) ? filePath : null;
};


module.exports = { saveImage, getImagePath, uploadsDir };
