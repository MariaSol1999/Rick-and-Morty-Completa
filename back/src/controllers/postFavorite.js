const  favs  = require('../utils/favs');

// const { character } = req.body;
// if(character) {
    // favs.push(character);
    // return res.status(200).json("Character created succesfully");
// }

const postFavorite = (req, res) => {
    favs.push(req.body)
    res.status(200).end(JSON.stringify(req.body))
};

module.exports =  postFavorite ;