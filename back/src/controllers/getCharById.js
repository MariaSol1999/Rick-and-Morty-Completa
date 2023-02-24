const axios = require("axios"); 



const url = "https://rickandmortyapi.com/api/character/";
 const getCharById = (req, res) => {
    const { id } = req.params;
    try {
        axios(`${url}${id}`)
        .then(info => info.data)
        .then(data => {
            let character = {
                id: data.id, 
                image: data.image, 
                name: data.name,
                gender: data.gender,
                species: data.species
           }
    
           res.status(200).json(character);
        })   
    }
        catch(error) {
            res.status(500).json({message: error.message})
        }
    }
    



    module.exports = getCharById;




// CODIGO CONTROLADOR DE SERVER HTTP

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(info => info.data)
//     .then(data => {
//         let character = {
//             id: data.id, 
//             image: data.image, 
//             name: data.name,
//             gender: data.gender,
//             species: data.species
//        }

//        res.writeHead(200, {"Content-Type": "application/json" })
//        res.end(JSON.stringify(character))
//     })
//     .catch(err => {
//         res.writeHead(500, {"Content-Type": "text/plain" });
//         res.end(err.message)
//     })
// }

// este controlador, hace la peticcion a la API y ddentro de un objeto
// se guarda la data que nosotros queremos consrvar de la peticion y con un 200
// responder o sino con un error en caso que no se haya cumplido la peticion (500)

