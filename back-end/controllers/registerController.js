const registerService = require('../services/registerService');


const registerController = async (req, res) => {
    registerService(req,res);
}

module.exports = registerController;