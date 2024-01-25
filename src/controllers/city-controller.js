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
        const response = await cityService.deleteCity(req.param.id);
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
        const response = await cityService.getCity(req.param.id);
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
        const response = await cityService.updateCity(req.param.id,req.body);
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

module.exports = {
    create,
    destroy,
    get,
    update
}