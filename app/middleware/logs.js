const logAksesAPI = (req, res, next)=>{
    console.log("API request");
    next();
};

module.exports = logAksesAPI;