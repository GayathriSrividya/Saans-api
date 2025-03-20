const { createResponse } = require('../utils/responseHelper');

const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    return createResponse(res, null, 'INTERNAL_SERVER_ERROR', err.message);
};

module.exports = errorHandler;
