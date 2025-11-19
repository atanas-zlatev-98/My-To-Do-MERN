const express = require('express');
const cors = require('cors');

function configExpress(app){
    
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.use(cors({credentials:true,origin:'http://localhost:5173'}))

    app.listen(process.env.PORT || 3001,()=>{
        console.log(`Server Started at: ${process.env.PORT || 3001}`);
    })
}

module.exports = {
    configExpress
}