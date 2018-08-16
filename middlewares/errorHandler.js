"use strict";

module.exports = app => {

// development error handler
    if (app.get("env") === "development") {
        app.use((err, req, res, next) => {
            console.log(err);
            res.status(500);
            res.json(err);
        });
    }

// production error handler
    app.use((err, req, res, next) => {
        //res.status(err.status);
        //delete err.details;
        res.status(500);
        res.json(err);

    });

};