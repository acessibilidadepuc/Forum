app.controller("topicoCtrl", function($scope, $routeParams, $http){
   var idTopico = $routeParams.idTopico;
   $scope.pagina = "Tópico";
   $http({
           url: 'http://localhost:3000/comentario/lista/' + idTopico,
           method: "GET"
       })
       .then(function(response) {
         $scope.comentarios = response.data;
       },
       function(response) { // optional
         alert("Erro = " + response.statusText);
       });
});
