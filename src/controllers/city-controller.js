const { CityService } = require('../services/index');

const cityService = new CityService();

/**
 * POST method used here
 * data -> req.body 
 */
const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json( {
            data : city,
            success : true,
            message : 'Successfully created a city',
            err : {}  // no error thatwhy true;
        })
    } catch (error) {
        console.log(error);
        return res.status(408).json({
            data : {},
            success: false,
            message : 'Not able to create a city',
            err : error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const del = await cityService.deleteCity(req.body);
        return res.status(201).json({
            success : true,
            err : {}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success : false,
            err : error
        });
    }

}

const get = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

const update = (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}