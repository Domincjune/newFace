'use strict';

/**
 * @ngdoc function
 * @name newFaceAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newFaceAngularApp
 */
angular.module('newFaceAngularApp')
  .controller('SingleCtrl', function ($scope, Videos) {

    //$scope.iframes = [	{id: 6773615},{id: 6773615},{id: 6773615},{id: 6773615} ,{id: 6773615}  ];

    $scope.iframes = [{ id: 'XGSy3_Czz8k'}];
    $scope.test = "its a test";

    $scope.getIframeSrc = function(id) {
      return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + id)
  	  //return 'http://flashservice.xvideos.com/embedframe/' + id;
  	};

  });
