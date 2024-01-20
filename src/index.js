const express = require('express');
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () =>{
    // creating the express object.
    const app = express();

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}.`);
    })
    
}
setupAndStartServer();