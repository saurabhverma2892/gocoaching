"use strict";

module.exports = app => {
    let Sequelize = require("sequelize");
    let postgresql = app.config.variables.postgresql;
    var sequelize = new Sequelize(postgresql.database, postgresql.username, postgresql.password, postgresql);
    return sequelize;
};