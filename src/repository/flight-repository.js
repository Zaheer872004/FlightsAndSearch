const { Flights } = require('../models/index');
const { Op} = require('sequelize');

class FlightRepository{
    // this is the private function.
    #createFilter(data){
        let filter = [];
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;  
        }
        if(data.minPrice){
            Object.assign(filter, {price :{[Op.gte]:data.minPrice}});

        }
        if(data.maxPrice){
            Object.assign(filter, {price   :{[Op.lte]:data.maxPrice}});

        }
        if(data.minPrice && data.maxPrice){
            Object.assign(filter, {price :{[Op.between]:[data.minPrice,data.maxPrice]}});
                 
        }
        // if(data.arrivalAirportId && data.departureAirportId){

        // }
        console.log(filter);
        return filter;
    }


    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight repository");
            throw {error};
        }
    }
    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight repository");
            throw {error};
        }
    }

    async getAllFlight(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject 
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight repository");
            throw {error};
        }
    }

}

module.exports = FlightRepository;

/**
 * {
 * arrivalAirportId : 2,
 * departureAirportId : 4,
 * price :{[Op.gte] : 4000}  // price is greater than equal to 4000 thousand.
 * 
 * }
 */