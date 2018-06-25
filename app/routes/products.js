/*Arquivo responsável pela chamada dos atributos exportados do noticias.js do controller*/


module.exports=function(app){
		

		app.get('/noticias', function(req,res){//pegando as noticias,importando a var app que contem as requisições,passando app como parametro
			index.app.controllers.noticias.noticias(app,req,res);/*rota do arquivo noticias.js do controller para a chamada do atributo noticias por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
		
		});
		
		app.get('/noticia', function(req,res){
				index.app.controllers.noticias.noticia(app,req,res); /*rota do arquivo noticias.js do controller para a chamada do atributo noticia por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
			
			});
		app.post('/busca',function(req,res){
			index.app.controllers.noticias.busca(app,req,res);/*rota do arquivo noticias.js do controller para a chamada do atributo busca por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
			
		});
		app.get('/excluir', function(req, res){
			index.app.controllers.noticias.excluir(app,req,res);/*rota do arquivo noticias.js do controller para a chamada do atributo excluir por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
		});
			
	
};


/*Isabela Archanjo Batarce - 5A*/