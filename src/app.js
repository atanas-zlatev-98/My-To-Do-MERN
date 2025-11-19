require('dotenv').config();
const express = require('express');
const { configExpress } = require('./config/configExpress');
const { configDatabase } = require('./config/configDatabase');
const { configRoutes } = require('./config/configRoutes');


startServer();
async function startServer() {
    
    const app = express();
    
    configExpress(app);
    await configDatabase();
    configRoutes(app);

}