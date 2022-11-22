const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const configDB = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



configDB.checkConnectDB();

app.listen(port, () => {
    console.log(`App working port ${port}`)
})