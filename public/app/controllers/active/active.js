"use strict"

function activeController() {

    self = this;  

    self.loaded = false;

    console.log("workign in active ");
}

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('active', {
        url: '/',
        templateUrl: '/app/controllers/active/active.html',
        controller: activeController,
        controllerAs : "activeController"
      });
  });