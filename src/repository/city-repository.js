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
            const city = await City.update(data, {
                where:{
                    id:cityId
                }
            });
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


}

module.exports = CityRepository;