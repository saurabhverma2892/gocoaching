"use strict"

function lowController() {

    self = this;  

    self.loaded = false;

    console.log("workign in low ");
}

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('low', {
        url: '/low',
        templateUrl: '/app/controllers/low/low.html',
        controller: lowController,
        controllerAs : "lowController"
      });
  });