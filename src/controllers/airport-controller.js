
const { AirportService } = require('../services/index');

const create = async (req,res)=>{
    try {
        const airport = await AirportService.createAirport(req.body);
        return res.status(201).json({
            
        })
    } catch (error) {
        console.log(error);
    }
}