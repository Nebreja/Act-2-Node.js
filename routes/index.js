const express = require('express');
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
    res.render('index');
});

// Route for the about page
router.get('/about', (req, res) => {
    res.render('about');
});

// Route for 404 errors
router.use((req, res) => {
    res.status(404).render('error');
});

module.exports = router;
