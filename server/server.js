// import dotenv and use it to load the environment variables
require("dotenv").config();

// Basic express server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./routes/index');

require('./config/Database');   

app.use(cors());

//Middleware
app.use(express.json()); // transforme les données entrantes en json


//Define the routes
app.use('/', router);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
