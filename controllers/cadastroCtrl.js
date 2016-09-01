app.controller("cadastroCtrl", function($scope, $routeParams, $http, $location){
 var id = $routeParams.id;
$scope.pagina = "cadastro";

 $scope.adicionaTopico = function (topico) {
    $http({
        url: 'http://localhost:3000/topico/cadastrar',
        method: "POST",
        data: {
                'assunto': topico.assunto,
                'idUsuario':1,
                'situacao': 'ATIVO',
                'datahora': new Date(),
                'descricao': topico.descricao,
                'grau':'1'
              }
    })
    .then(function(response) {
          $location.path('/');
    },
    function(response) { // optional
        alert("Erro!!!");
    });
};

$scope.adicionaComentario = function (comentario) {
   $http({
       url: 'http://localhost:3000/comentario/cadastrar',
       method: "POST",
       data: {
               'idTopico': id,
               'dataHora': new Date(),
               'idUsuario': 1,//Mudar depois
               'comentario': comentario.comentario
             }
   })
   .then(function(response) {
         $location.path('/topico/' + id);
   },
   function(response) { // optional
       alert("Erro!!!");
   });
};

$scope.adicionaResposta = function (resposta) {
   $http({
       url: 'http://localhost:3000/resposta/cadastrar',
       method: "POST",
       data: {
               'idComentario': id,
               'dataHora': new Date(),
               'idUsuario': 1,//Mudar depois
               'resposta': resposta.resposta
             }
   })
   .then(function(response) {
         $location.path('/comentario/' + id);
   },
   function(response) { // optional
       alert("Erro!!!");
   });
};
});
