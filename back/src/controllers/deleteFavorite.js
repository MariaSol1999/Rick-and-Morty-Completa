const favs  = require('../utils/favs');



const deleteFavorite = (req, res) => {
    const { id } = req.params;
    const character = favs.find(character => character.id === Number(id))
    if(character) {
        favs = favs.filter(e => e.id !== Number(id))
        res.status(200).end(JSON.stringify(character))
    } else {
        res.status(400).end("este character ya no se encuentra en Fav")
    }
};

module.exports =  deleteFavorite ;