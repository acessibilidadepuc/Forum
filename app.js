var app = angular.module("app", ["ngRoute"]);


app.config(function($routeProvider){
	$routeProvider.when("/home", {
		controller: "homeCtrl",
		templateUrl: "views/home.html"
	});

	$routeProvider.when("/pagina1", {
		controller: "pagina1Ctrl",
		templateUrl: "views/pagina1.html"
	});

	$routeProvider.when("/topicos", {
		controller: "topicosCtrl",
		templateUrl: "views/topicos.html"
	});

	$routeProvider.when("/topico/:idTopico", {
		controller: "topicoCtrl",
		templateUrl: "views/topico.html"
	});

	$routeProvider.when("/cadastro", {
		controller: "cadastroCtrl",
		templateUrl: "views/cadastro.html"
	});

	$routeProvider.when("/comentario/:idComentario", {
		controller: "comentarioCtrl",
		templateUrl: "views/comentario.html"
	});

	$routeProvider.when("/cadastroComentario/:id", {
		controller: "cadastroCtrl",
		templateUrl: "views/cadastroComentario.html"
	});

	$routeProvider.when("/cadastroResposta/:id", {
		controller: "cadastroCtrl",
		templateUrl: "views/cadastroResposta.html"
	});

 	$routeProvider.otherwise({redirectTo: "/topicos"});
})
