const {Op} = require('sequelize');
const { Airport } = require('../models/index');

class AirportRepository {

    async createAirport(name,address) {
        try {
            const airport = await Airport.create({
                name,
                address
            });
            return airport;
        } catch (error) {
            console.log(" Something went wrong with Creating airport_repository ");
            throw{error};
        }
    }


    async deleteAirport(airportId) {
        try {
            const airport = await Airport.destroy({
                where : {
                    id : airportId,
                },
            });
            return true;
        } catch (error) {
            console.log(" Something went wrong with Deleting airport_repository ");
            throw{error};
        }
    }


    async updateAirport(airportId,name,address) {
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            airport.name = data.address;
            await airport.save();
            return airport;
        } catch (error) {
            console.log(" Something went wrong with updating airport_repository ");
            throw{error};
        }
    }


    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log(" Something went wrong with getting/fetching airport_repository ");
            throw{error};
        }
    }


    async getAllAirport({name : filter}) {
        try {
            if(filter && filter.name){
                const airport = await Airport.findAll({
                    where :{
                        name :{
                            [Op.startsWith] : filter.name 
                        },
                    },
                });
                return airport;
            }
            
            const airport = await Airport.findAll();
            return airport;
        } catch (error) {
            console.log(" Something went wrong with gettingAll/fetchingAll airport_repository ");
            throw{error};
        }
    }

}


module.exports = AirportRepository;