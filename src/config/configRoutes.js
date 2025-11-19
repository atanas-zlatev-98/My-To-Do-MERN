const {taskController} = require('../controllers/taskController.js'); 

function configRoutes(app){
    app.use(taskController);
}

module.exports = {
    configRoutes
}

