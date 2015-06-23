'use strict';

/**
 * @ngdoc overview
 * @name newFaceAngularApp
 * @description
 * # newFaceAngularApp
 *
 * Main module of the application.
 */
angular
  .module('newFaceAngularApp', [
    'ngRoute', 
    'lbServices',
    'angularUtils.directives.dirPagination'
  ])
  .config(function(LoopBackResourceProvider, $routeProvider) {

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://api.example.com/');

    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/single', {
        templateUrl: 'views/single.html',
        controller: 'SingleCtrl'
      })
      .otherwise({
        redirectTo: '/'
    });

  });