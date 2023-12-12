// const ProductService = require("../services/product-service");

module.exports = (app) => {
    
    // const service = new ProductService();

    app.use('/app-events',async (req,res,next) => {

        const { payload } = req.body;

        //handle subscribe events
        // service.SubscribeEvents(payload);

        console.log("============= Products Service Received Event ================");
        return res.status(200).json(payload);

    });

}