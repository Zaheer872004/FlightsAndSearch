const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index');

router.use('/v1', v1ApiRoutes);  // till here comes up like this api/v1/ then anything ahead

module.exports = router;

