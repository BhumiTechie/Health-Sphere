const express = require('express');
const upload = require('./middleware/uploadMiddleware');
const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
});

module.exports = router;
