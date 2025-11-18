
function configExpress(app){
    app.listen(process.env.PORT || 3001,()=>{
        console.log(`Server Started at: ${process.env.PORT || 3001}`);
    })
}

module.exports = {
    configExpress
}