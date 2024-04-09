// import dotenv and use it to load the environment variables
require("dotenv").config();

// Basic express server
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

require('./config/Database');

app.use(cors());

// Define the routes
app.use('/api', require('./routes'));



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

process.env;