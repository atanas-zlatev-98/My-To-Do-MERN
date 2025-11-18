require('dotenv').config();
const express = require('express');
const { configExpress } = require('./config/configExpress');


startServer();
async function startServer() {
    
    const app = express();
    
    configExpress(app);

}