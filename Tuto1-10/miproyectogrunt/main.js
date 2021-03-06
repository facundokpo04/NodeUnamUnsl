//angular.module('miApp', []);

function alumnosController($scope) {
  $scope.alumnos = [
    {nombre: "Juan Blanco", telefono: "123456", curso: "Segundo Eso"},
    {nombre: "Facundo Dominguez", telefono: "123456", curso: "Primero Eso"},
    {nombre: "Alberto Herrera", telefono: "123456", curso: "Segundo Eso"},
    {nombre: "Danilo Bustos", telefono: "123456", curso: "Tercero Eso"}
  ];

  $scope.formVisibility = false;


  $scope.getTotalAlumnos = function () {
    return $scope.alumnos.length;
  };


  $scope.Save = function () {
    $scope.alumnos.push({
      nombre: $scope.nuevoAlumno.nombre,
      telefono: $scope.nuevoAlumno.telefono,
      curso: $scope.nuevoAlumno.curso
    });
    $scope.nuevoAlumno.nombre = '';
    $scope.nuevoAlumno.telefono = '';
    $scope.nuevoAlumno.curso = '';
    $scope.formVisibility = false;
  };

  $scope.ShowForm = function () {
    $scope.formVisibility = true;
    console.log($scope.formVisibility);

  };
}


/*
.controller('alumnosController',['$scope',function($scope){

  $scope.alumnos=[
  {nombre:"Juan Blanco",telefono:"123456",curso:"Segundo Eso"},
  {nombre:"Facundo Dominguez",telefono:"123456",curso:"Primero Eso"},
  {nombre:"Alberto Herrera",telefono:"123456",curso:"Segundo Eso"},
  {nombre:"Danilo Bustos",telefono:"123456",curso:"Tercero Eso"}
  ];

}]);*/
