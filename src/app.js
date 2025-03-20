require('dotenv').config();
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.use('/api', routes);

 
app.use((req, res) => {
    return res.status(404).json({
        id: "api.error",
        ver: "v1",
        ts: Date.now().toString(),
        params: {
            resmsgid: "null",
            msgid: uuidv4(),
            err: "ROUTE_NOT_FOUND",
            status: "error",
            errmsg: `Route ${req.originalUrl} not found`
        },
        responseCode: "NOT_FOUND",
        result: null
    });
});

 
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
