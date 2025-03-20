const { createResponse } = require('../utils/responseHelper');
const { v4: uuidv4 } = require('uuid');

const generate = async (req, res) => {
    try {
        console.log('Request Headers:', req.headers);
        console.log('Request Body:', req.body);

        const { timestamp, headers, events } = req.body;

        
        const processedEvents = events.map(event => {
            const eventObj = {};
            headers.forEach((header, index) => {
                eventObj[header] = event[index];
            });
            return eventObj;
        });

         
        const dataInPayload = {
            id: "api.data.in",
            ver: "v2",
            ts: new Date().toISOString(),
            params: {
                msgid: uuidv4()
            },
            request: {
                timestamp,
                events: processedEvents
            }
        };
        // TODO: Call data-in API
        /*
        const dataInResponse = await axios.post('DATA_IN_API_URL', dataInPayload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        */

        const responseData = {
            id: "api.v3.push",
            ver: "v2",
            ts: new Date().toISOString(),
            params: {
                status: "SUCCESS",
                msgid: dataInPayload.params.msgid,
                resmsgid: uuidv4()
            },
            responseCode: "OK",
            result: {
                message: "Data pushed successfully",
                events: processedEvents
            }
        };

        return createResponse(res, responseData);
    } catch (error) {
        console.error('Error in otelGenerator:', error);
        return createResponse(res, null, 'INTERNAL_SERVER_ERROR', error.message);
    }
};

module.exports = {
    generate
};
