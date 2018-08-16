"use strict";

module.exports = app => {

    function isAuthenticated(req,res,next){
        if(req.user && req.isAuthenticated()){
            next();
        }
        else
        {
            res.redirect("/login");
        }
    }

    app.get("/", (req, res, next) => {
        res.render("main");
    });

    app.get("/login", (req,res,next)=>{
        res.render("login");
    })

    app.post("/login", (req,res,next)=>{
        res.redirect("/");
    })


    app.use("/api", app.routes.api);

    app.get("/*", (req,res,next)=>{
        res.render("main");
    })


};