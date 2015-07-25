'use strict';

/**
 * @ngdoc function
 * @name newFaceAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newFaceAngularApp
 */
angular.module('newFaceAngularApp')
  .controller('ListItemCtrl', function ($scope, Videos) {
  	
    $scope.getIframeSrc = function(id) {
      return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + id)
  	  //return 'http://flashservice.xvideos.com/embedframe/' + id;
  	};

  });
