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
        if(req.session.login){
            res.render("main");
        }
        else
        {
            res.redirect("/login");
        }
        
    });

    app.get("/login", (req,res,next)=>{
        res.render("login");
    })

    app.post("/login", (req,res,next)=>{
        req.session.login = true;
        res.redirect("/");
    })

    app.get("/logout",(req,res,next)=>{
        req.session.login=false;
        res.redirect("/login");
    })


    app.use("/api", app.routes.api);

    app.get("/*", (req,res,next)=>{
        res.render("main");
    })


};