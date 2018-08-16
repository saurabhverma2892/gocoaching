"use strict"

let passport = require("passport");
let LocalStrategy = require('passport-local').Strategy;
let sequelize = require('sequelize');


module.exports = app => {

    let User = app.models.user.User;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
            console.log("working in serialize");
            done(null, user);
        });

    passport.deserializeUser(function(user, done) {
        console.log("working in deserialize");
        User.findOne({
            where:{
                id:user.id
            }
        }).then(user=>{
            done(null, user);
        })
    });

    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

      process.nextTick(function() {

                User.find({ where: {email: email} }).then(function(user) {
                    if (user) {
                        var test = user.validPassword(password);
                        if(test){
                            user.password = undefined;
                            return done(null, user);
                        }
                        else
                        {
                            return done(null, false, req.flash("errorMessage","incorrect password"));
                        }
                    }
                    else {
                        console.log("user not found");
                        return done(null, false, req.flash("errorMessage","user not found"));
                    } 
                });
          })
        }
    ));

    return passport;

}