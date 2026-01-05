const express = require('express');
const router = express.Router();

// Import route modules
const exampleRoutes = require('./exampleRoutes');

// Mount routes
router.use('/examples', exampleRoutes);

module.exports = router;
