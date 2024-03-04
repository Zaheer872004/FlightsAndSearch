const validateCreateFlight = (req,res,next) => {

        if(
            !req.body.flightNumber || !req.body.airplaneId || !req.body.departureAirportId || !req.body.arrivalAirportId || !req.body.arrivalTime || !req.body.departureTime || !req.body.price
        ){
            // if anyone of above sentence missing the come the inside here and return err or missing msg.
            return res.status(400).json({
                data : {},
                success : false,
                message : 'Invalid request body for create flight',
                err : "Missing paramere OR missing Input"
                
            });
        }
        next();
}

module.exports = {
    validateCreateFlight,
}