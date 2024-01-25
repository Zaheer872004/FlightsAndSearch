const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { City } = require('./models/index');
const CityRepo = require('./repository/city-repository');
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () => {
    // creating the express object.
    const app = express();
    const host = '0.0.0.0';
    // const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Corrected line for setting up API routes
    app.use('/api', ApiRoutes);

    app.listen(PORT, host ,async () => {
        console.log(`Server started at ${PORT}.`);
    });
};

setupAndStartServer();
