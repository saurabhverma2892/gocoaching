"use strict";

module.exports = app => {
    let apiService = app.services.apiService;
    let secret = app.config.variables.secret.key;

    function loginUser(req,res,next){
        apiService.loginUser(req.body).then(data=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function addHome(req,res,next){
        apiService.addHome(userId,params).then(data=>{
            res.send(data);
        })
    }

    function getAllHomes(req,res,next){
        apiService.getAllHomes().then(data=>{
            res.send(data);
        })
    }

    return {
        loginUser,
        addHome,
        getAllHomes
    }
}