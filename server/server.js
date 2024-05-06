require("dotenv").config();

// Basic express server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./routes/index');
const cookieParser = require('cookie-parser');
const API_URL = process.env.API_URL || 'http://localhost:8000';


require('./config/Database');   

app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json({type: 'application/json'}));

//Define the routes
app.use('/', router);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

// Utilisation de API_URL






