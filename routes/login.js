"use strict"

let router = require("express").Router();
let jwt = require('jsonwebtoken');
let multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/rooms/')
  },
  filename: function (req, file, cb) {
    var currentdate = new Date(); 
    var name = currentdate.getTime().toString();
    cb(null, name+"_"+file.originalname);
  }
})

let uploadMediaForRooms = multer({storage: storage})


module.exports = app => {
    let apiController = app.controllers.apiController;

    let secret = app.config.variables.secret.key;

    
    router.route("/users").post((req,res,next)=>{
        apiController.getAllUsers(req,res,next);
    })

    return router
}