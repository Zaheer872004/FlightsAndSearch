const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
// const { City } = require('./models/index');
const CityRepo = require('./repository/city-repository');
const ApiRoutes = require('./routes/index');

// const {Airport,City} = require('./models/index');
const {Airplane} = require('./models/index');

const db = require('./models/index');

const setupAndStartServer = async () => {
    // creating the express object.
    const app = express();
    // const host = '0.0.0.0';
    // const PORT = 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Corrected line for setting up API routes
    app.use('/api', ApiRoutes);

    app.listen(PORT,async () => {
        console.log(`Server started at ${PORT}.`);
    {
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
        // In this scope one practice of try.
        // const airports = await Airport.findAll({
        //     include : City,
        // });
        // console.log(airports);
        // I just want to query on cities to get all the aiports

        // const result = await City.findByPk(9).getAirport();
        // console.log(result);

        // const result = await City.findByPk(9);
        // const ans = await result.getAirport();
        // console.log(result,ans);

        // db.sequelize.sync({alter:true});
    }
        // db.sequelize.sync({alter:true});
        // const city = await City.findOne({
        //     where: {
        //         id: 8
        //     }
        // });
        // const airports = await city.getAirports();
        // // console.log(airports);
        // console.log(city,airports);
        
        /*# for Airplane creating
        
        */
       await Airplane.create({
        modelNumber : 'Bombardier CRJ'
       });

    });
};

setupAndStartServer();
