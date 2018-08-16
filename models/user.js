"use strict";
let Sequelize = require("sequelize");
let bcrypt = require('bcrypt-nodejs');
let SALT_WORK_FACTOR = 12;
let jwt = require('jsonwebtoken');
module.exports = app => {

    let sequelize = app.db.mysqlConnection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;
    let secret = app.config.variables.secret.key;

    var User = sequelize.define("users", {  
        id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        role: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.TEXT
        },
        gender: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: "users",
        timestamps: true,
        instanceMethods: {
            generateHash: function(password){
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },
            validPassword: function(password){
                return bcrypt.compareSync(password, this.password);
            },
            toJSON: function () {
              var values = Object.assign({}, this.get());
              delete values.password;
              return values;
            }
        }
    });

    User.prototype.validPassword = function (password) {return bcrypt.compareSync(password, this.password);}

    User.beforeCreate(function(user, options) {
        var hashedPw = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
        user.password = hashedPw;
    });

    function getUser(id){
        return User.findById(id);
    }

    function initializeAssociations(){

    }

    return {
        User,
        getUser,
        initializeAssociations
    };
};
