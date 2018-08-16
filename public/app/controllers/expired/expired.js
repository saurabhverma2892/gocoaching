"use strict"

function expiredController() {

    self = this;  

    self.loaded = false;

    console.log("workign in expired ");
}

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('expired', {
        url: '/expired',
        templateUrl: '/app/controllers/expired/expired.html',
        controller: expiredController,
        controllerAs : "expiredController"
      });
  });