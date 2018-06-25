
module.exports= function(app){
	app.get('/', function(req,res){//rota solicitada
		index.app.controllers.home.home(app,req,res); /*rota do arquivo home.js do controller para a chamada do atributo index por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
	
	});
}
