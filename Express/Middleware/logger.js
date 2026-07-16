const logger = (req, res, next) => {
    console.log("request came");
    next();
};

module.exports = logger;