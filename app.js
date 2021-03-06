"use strict";
let express = require("express");
let consign = require("consign");
let logger = require("winston");
let app = express();
let appPort = process.env.PORT || "8084";

consign()
    .include("./helpers")
    .then("./config")
    .then("./middlewares/basicSettings.js")
    .then("./db")
    .then("./middlewares/staticResources.js")
    .then("./models")
    .then("./auth/passport.js")
    .then("./services")
    .then("./controllers")
    .then("./routes")
    .then("./middlewares/mainRoutes.js")
    .then("./middlewares/errorHandler.js")
    .then("./initializeModels.js")
    .into(app);


if (process.env.NODE_ENV !== "test") {
    app.listen(appPort, () => {
        logger.info(`Server started on port ${appPort}`);
    });
}


module.exports = app;