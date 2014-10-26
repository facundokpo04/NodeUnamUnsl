'use strict';

/**
 * @ngdoc function
 * @name tutoYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tutoYoApp
 */
angular.module('tutoYoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
