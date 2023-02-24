const  favs  = require('../utils/favs');


const getFavorite = (req, res) => {
    res.status(200).end(JSON.stringify(favs))
};



module.exports =  getFavorite ;