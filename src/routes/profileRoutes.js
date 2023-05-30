const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const profileController = require('../controllers/profileController');

router.get('/profile', authMiddleware.authenticateToken, profileController.getUserProfile);

module.exports = router;
