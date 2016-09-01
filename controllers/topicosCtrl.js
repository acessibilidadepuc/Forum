app.controller("topicosCtrl", function($scope, $http){
  $scope.pagina = "Tópicos";
   $scope.ListaTopicosController = function() {
     $http.get('http://localhost:3000/topico/lista').success(function(tops){
         $scope.topicos = tops;
     });
 }
});
