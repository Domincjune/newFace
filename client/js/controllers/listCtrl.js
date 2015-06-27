'use strict';

/**
 * @ngdoc function
 * @name newFaceAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newFaceAngularApp
 */
angular.module('newFaceAngularApp')
  .controller('ListCtrl', function ($scope, $sce, Videos) {

    //$scope.iframes = [	{id: 6773615},{id: 6773615},{id: 6773615},{id: 6773615} ,{id: 6773615}  ];

    $scope.videos = Videos.find({filter: { limit: 10 }});

  /*  $scope.iframes = [{ id: 'XGSy3_Czz8k'},{ id: 'XGSy3_Czz8k'},{ id: 'XGSy3_Czz8k'},{ id: 'XGSy3_Czz8k'},{ id: 'XGSy3_Czz8k'},{ id: 'XGSy3_Czz8k'}]

    $scope.getIframeSrc = function(id) {
      return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + id)
  	  //return 'http://flashservice.xvideos.com/embedframe/' + id;
  	};*/

  });
