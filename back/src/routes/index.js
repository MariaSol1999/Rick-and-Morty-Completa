const express = require("express");
// const characters = require("./characters");
const router = express.Router();

const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const getFavorite = require("../controllers/getFavorite");
const postFavorite = require("../controllers/postFavorite");
const deleteFavorite = require ("../controllers/deleteFavorite");

// router.use("/rickandmorty", characters);


router.get("/character/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.get("/rickandmorty/fav", getFavorite);
router.post("/rickandmorty/fav", postFavorite);
router.delete("/rickandmorty/fav/:id", deleteFavorite);


module.exports = router;


//aca vamos a crear todas las rutas