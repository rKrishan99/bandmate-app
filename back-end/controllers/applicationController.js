const{addApplicationService, getApplicationByBand, getApplicationByPlayer} = require('../services/applicationService') 

const addApplicationController = async (req, res) => {    
    addApplicationService(req,res);
}

const getApplicationController = async (req, res) => {    
    const type = req.params.type;
    
    if(type=='band'){
        getApplicationByBand(req,res);
    }
    else if(type=='player'){
        getApplicationByPlayer(req,res);
    }
}

module.exports = {addApplicationController, getApplicationController};