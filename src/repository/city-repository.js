const { City } = require('../models/index');

// here all of the code which interact with the models

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        } catch(error){
            throw {error};
        }
    }

    async deleteCity({cityId}){
        try{
            await City.destroy({
                where :{
                    id : cityId,
                }
            });
        }catch(error){
            throw {error};
        }
    }
}

module.exports = CityRepository;