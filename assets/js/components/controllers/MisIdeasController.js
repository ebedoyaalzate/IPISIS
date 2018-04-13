ipisis.controller('MisIdeasController', ["$scope", "IdeaService", function($scope, IdeaService) {
    IdeaService.obtenerMisIdeas()
      .success(function(data) {
        $scope.ideas = data;
      });
  
    $scope.mostrar = function(idea) {
      $scope.id = idea.id;
      $scope.titulo = idea.ofertas;
      $scope.descripcion = idea.descripcion;
      $scope.numMiembros = idea.numMiembros;
      $scope.numEquipos = idea.numEquipos;
      $scope.proponentes = idea.proponentes;
      $scope.asignaturas = idea.asignaturas;
      $scope.prerrequisitos = idea.prerrequisitos;
    };
         
      
  }]);
