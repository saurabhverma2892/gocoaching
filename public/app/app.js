'use strict';

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var baseHref = document.getElementsByTagName('base')[0].attributes[0].value;

var isClient = false;
if (getCookie('drmDetails')) {
  var allUserDetails = JSON.parse(decodeURIComponent(getCookie('drmDetails')));
  var agency = allUserDetails.Team != null ? allUserDetails.Team.Id : baseHref;
  if(agency != null && (baseHref == '/'+agency.toLowerCase()+'/' || baseHref == agency.toLowerCase())){
    isClient = true;
  }
}

angular.module('app', [
  'ui.router',
  'ngCookies',
  'ngToast',
  'angularUtils.directives.dirPagination',
]).config(function($urlRouterProvider, $locationProvider, $stateProvider, ngToastProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('logout', {
        url: '/logout',
        template: '',
        controller: function(){
            window.location.replace("/logout");
        }
      });

    ngToastProvider.configure({
        animation: 'slide'
      });

}).run(function($rootScope) {

});

