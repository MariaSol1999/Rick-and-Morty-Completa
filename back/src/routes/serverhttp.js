

















// SERVIDOR CON HTTP

// const http = require("http");
// const getCharById = require("../controllers/getCharById");
// const getCharDetail = require("../controllers/getCharDetail");

// const data = require("../utils/data");

// http.createServer(function(req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');

    
//      let id = req.url.split("/").at(-1);

//     if(req.url.includes("onsearch")) {
//         getCharById(res, id);
//     }

//     if (req.url.includes("detail")) {
//         getCharDetail(res, id);
//     }

// }

// ).listen(3001, () => {
//     console.log("server levantado");
// });


    //CORS CROSS ORIGIN RESOURCES ==> permite la peticion sin importar 
    // de donde sea, de cualquier dominio

    // res.setHeader('Access-Control-Allow-Origin', '*');

    // if (req.url.includes('rickandmorty/character')) {
    //     let id = req.url.split("/").at(-1);
    //     let character =  data.find(char => char.id === Number(id))

    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(JSON.stringify(character))

