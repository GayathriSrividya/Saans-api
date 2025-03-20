const express = require('express');
const router = express.Router();
const otelGenerator = require('../controllers/otelGenerator');

router.post('/v3/push', otelGenerator.generate);

module.exports = router;
