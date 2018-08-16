"use strict";

(function(){

    function sidenavController() {
    
    }

    angular.module('app')
      .directive('sidenav', function() {
        return {
            templateUrl: '/app/directives/sidenav/sidenav.html',
            restrict: 'E',
            controller: sidenavController,
            controllerAs: 'sidenavController'
        };
      });

})();
