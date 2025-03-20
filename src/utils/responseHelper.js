const { v4: uuidv4 } = require('uuid');

const createResponse = (res, result, errorCode = null, errorMessage = null) => {
    const response = {
        id: "api.otel.generate",
        ver: "v1",
        ts: Date.now().toString(),
        params: {
            resmsgid: "null",
            msgid: uuidv4(),
            err: errorCode,
            status: errorCode ? "error" : "success",
            errmsg: errorMessage
        },
        responseCode: errorCode ? "INTERNAL_SERVER_ERROR" : "OK",
        result: result
    };

    const statusCode = errorCode ? 500 : 200;
    return res.status(statusCode).json(response);
};

module.exports = {
    createResponse
};
