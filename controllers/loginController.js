"use strict";
let jwt = require('jsonwebtoken');
let path = require('path');
let mime = require('mime');

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

    return {
        loginUser
    }
}