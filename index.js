'use strict';
const express = require("express");
const bodyParser =  require('body-parser');
require('dotenv').config()
const path = require("path");
const PORT = process.env.PORT || 8080;

import cors from 'cors';
// import models, { sequelize } from './server/models';
import routes from './server/routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client/build')));
app.set('trust proxy', true);

app.use('/api', routes.user);


if (process.env.NODE_ENV === "production") {
    app.get("/*", function(req, res) {   
        res.sendFile(path.join(__dirname, './client/build', 'index.html'));
    });
}


app.listen(PORT, () => console.log(`🌎 ==> Server now on running port ${PORT}!`));