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

// DELETE -> /city/:id
const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.query.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted a city',
            err : {}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : 'Not able to delete a city',
            err : error
        })
    }

}
// GET -> /city/:id
const get = async (req,res) => {
    try {
        const response = await cityService.getCity(req.query.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fetch the city ',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : 'Not able to fetch a city',
            err : error
        })
    }
}

// PATCH -> /city/:id - req.body
const update = async (req,res) => {
    try {
        const response = await cityService.updateCity(req.query.id,req.body);
        return res.status(200).json({ 
            data : response,
            success : true,
            message : 'Successfully update the city ',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : 'Not able to update a city',
            err : error
        })
    }
}

// GET -> /city
const getAll = async (req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data : cities,
            success : true,
            message : 'Successfully fetch the All-city ',
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : 'Not able to fetch a All-cities',
            err : error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}