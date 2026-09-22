const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Ensure 'uploads' directory exists safely
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// 1. Configure Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Files will be saved in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        // Keeps the original file extension while preventing duplicate names
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// 2. Serve a simple HTML Form for testing
app.get('/', (req, res) => {
    res.send(`
        <h2>Upload a File</h2>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="myFile" required />
            <button type="submit">Upload</button>
        </form>
    `);
});

// 3. Create the Upload Route
// 'myFile' must match the "name" attribute in your HTML input form
app.post('/upload', upload.single('myFile'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('Please select a file to upload.');
        }
        res.send(`File uploaded successfully! Saved as: ${req.file.filename}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// 4. Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
