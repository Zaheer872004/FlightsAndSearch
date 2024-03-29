const { Op } = require('sequelize');

const { where } = require('sequelize');
const { City } = require('../models/index');

// here all of the code which interact with the models

class CityRepository{


    async createCity({ name }){
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }

    }

    async deleteCity(cityId){
        // if(cityId === undefined){
        //     console.log("id is undefined");
        //     return false;
        // }

        try {
            await City.destroy({
                where: {
                    id : cityId,
                },
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }

    }

    async updateCity(cityId,data){
        try {
            // not able to get response like createAt and updatedAt
            // const city = await City.update(data, {
            //     where:{
            //         id:cityId
            //     }
            // });
            // return city;

            // below one in return hole json object
            const city = await City.findByPk(cityId);
            city.name = data.name ;
            await city.save();
            return city;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }

    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }

    async getAllCities(filter){
        try {
            console.log('Filter', filter);

            if(filter && filter.name){
                const cities = await City.findAll({
                    where :{
                        name : {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
            // console.log('Filter Cities :', cities);
            return cities
            }

            const cities = await City.findAll();
            // console.log('All Cities:', cities);
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw{error};
        }
    }




}

module.exports = CityRepository;