"use strict";

module.exports = app => {

    let Home = app.models.home;

    function addHome(userId,params){
        return Home.addHome(userId,params)
    }

    function getAllHomes(){
        return Home.getAllHomes();
    }

    return {
        addHome,
        getAllHomes
    }
}