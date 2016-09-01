app.controller("comentarioCtrl", function($scope, $routeParams, $http){
   var idComentario = $routeParams.idComentario;
   $scope.pagina = "comentário";
   $http({
           url: 'http://localhost:3000/resposta/lista/' + idComentario,
           method: "GET"
       })
       .then(function(response) {
               $scope.respostas = response.data;
       },
       function(response) { // optional
                alert("Erro = " + response.statusText);

       });
});
