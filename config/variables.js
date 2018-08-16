"use strict";

module.exports = {
    secret: {
        key: "buscoRoomieChingon"
    },
    mysql: {
        username: process.env.BUSCOROOMIE_DB_USERNAME,
        password: process.env.BUSCOROOMIE_DB_PASSWORD,
        database: process.env.BUSCOROOMIE_DB_NAME,
        host:process.env.BUSCOROOMIE_DB_HOST,
        dialect: "postgres",
        port:"5432",
        protocol: 'postgres',
        logging:  true ,
        options:{
            host: process.env.CAL_DB_HOST,
            timezone: '+05:30',
            dialect: "mysql"
        } ,
        dialectOptions: {
               ssl: false
        }
    },
    postgresql: {
        username:process.env.BUSCOROOMIE_DB_USERNAME,
        password:process.env.BUSCOROOMIE_DB_PASSWORD,
        database:process.env.BUSCOROOMIE_DB_NAME,
        host:process.env.BUSCOROOMIE_DB_HOST,
        dialect: "postgres",
        port:"5432",
        timezone: '+05:30',
        dialect:'postgres',
        protocol: 'postgres',
        logging:  true,
        options:{
            host:process.env.BUSCOROOMIE_DB_HOST,
            dialect:'postgres'
        },
        dialectOptions: {
            ssl: false
        }
    }
};