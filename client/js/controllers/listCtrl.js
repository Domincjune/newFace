'use strict';

/**
 * @ngdoc function
 * @name newFaceAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newFaceAngularApp
 */
angular.module('newFaceAngularApp')
  .controller('ListCtrl', ['$scope', '$sce', 'Videos', function ($scope, $sce, Videos) {

    //$scope.iframes = [	{id: 6773615},{id: 6773615},{id: 6773615},{id: 6773615} ,{id: 6773615}  ];

    $scope.videos = Videos.find({filter: { limit: 100 }});
/*    $scope.count = Videos.count();
    console.log($scope.count);*/

    $scope.getIframeSrc = function(id) {
      return $sce.trustAsResourceUrl('http://xvideos.com/embedframe/' + id)
  	  //return 'http://flashservice.xvideos.com/embedframe/' + id;
  	};

  }]);
