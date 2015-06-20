'use strict';

/**
 * @ngdoc function
 * @name newFaceAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newFaceAngularApp
 */
angular.module('newFaceAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.iframes = [	{id: 6773615},{id: 6773615},{id: 6773615},{id: 6773615} ,{id: 6773615}  ];

    $scope.getIframeSrc = function(id) {
	  return 'http://flashservice.xvideos.com/embedframe/' + id;
	};
  });
