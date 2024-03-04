const CrudService = require('./crud-service');
const { AirplaneRepository } = require('../repository/index');

class AirportService extends CrudService{

    constructor(){
        const airportRepository = new AirplaneRepository();
        super(airportRepository);
    }

}

module.exports = AirportService;
