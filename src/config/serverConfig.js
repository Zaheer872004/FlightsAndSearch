const dotenv = require('dotenv');
dotenv.config();

// const SYNC_DB = require()

module.exports = {
    PORT: process.env.PORT,
    SYNC_DB : process.env.SYNC_DB
};