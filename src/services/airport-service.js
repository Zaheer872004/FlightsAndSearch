
const AirportRepository = require('../repository/index');

class AirportService{

    async createAirport(name,address){
        try {
            const airport = await AirportRepository.createAirport(name,address);
            return airport;
        } catch (error) {
            console.log("Somethings wrong in create Airport in service-layer ");
            throw{error};
        }
    }

    async deleteAirport(airportId){
        try {
            const airport = await AirportRepository.deleteAirport(airportId);
            return true;
        } catch (error) {
            console.log("Somethings wrong in deleting Airport in service-layer ");
            throw{error};
        }
    }

    async updateAirport(airportId,name,address){
        try {
            const airport = await AirportRepository.updateAirport(airportId,name,address);
            return airport;
        } catch (error) {
            console.log("Somethings wrong in updating Airport in service-layer ");
            throw{error};
        }
    }

    async getAllAirport(filter){
        try {
            const airport = await AirportRepository.getAllAirport({name : filter.name});
            return airport;
        } catch (error) {
            console.log("Somethings wrong in gettingAllAirport/fetting Airport in service-layer ");
            throw{error};
        }
    }

}

module.exports = AirportService;
