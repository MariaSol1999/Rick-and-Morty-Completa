const app = require('./src/app');
const express = require("express");
const app = express();
const { router } = require('./src/routes/index');
const PORT = 3001;


app.use(express.json()); //parseara el body
app.use('/', router);

app.listen(PORT, () => {
    console.log("Server raised in port ' + PORT");
});

module.exports = { app };