const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const { City } = require('./models/index');
const CityRepo = require('./repository/city-repository');

const setupAndStartServer = async () =>{
    // creating the express object.
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}.`);
    //    await City.create({
    //         name:"New Delhi", 
    //     })
        const Respo = new CityRepo();
        Respo.createCity({name:"New Delhi"}); 
    })
    
}
setupAndStartServer();