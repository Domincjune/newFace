'use strict';

/**
 * @ngdoc function
 * @name newFaceAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newFaceAngularApp
 */
angular.module('newFaceAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
