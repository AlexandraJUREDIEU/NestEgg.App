require("dotenv").config();

// Basic express server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./routes/index');
const cookieParser = require('cookie-parser');


require('./config/Database');   

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Define the routes
app.use('/', router);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
