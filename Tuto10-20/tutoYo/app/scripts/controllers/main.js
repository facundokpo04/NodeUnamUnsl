'use strict';

/**
 * @ngdoc function
 * @name tutoYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tutoYoApp
 */
angular.module('tutoYoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
