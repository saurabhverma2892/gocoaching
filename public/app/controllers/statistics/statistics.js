"use strict"

function statisticsController() {

    self = this;  

    self.loaded = false;

    console.log("workign in statistics ");
}

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('statistics', {
        url: '/',
        templateUrl: '/app/controllers/statistics/statistics.html',
        controller: statisticsController,
        controllerAs : "statisticsController"
      });
  });