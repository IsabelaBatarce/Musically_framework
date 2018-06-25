module.exports=function(app){
	app.get('/add_product',function(req,res) {
		index.app.controllers.add.add_product(app,req,res); /*rota do arquivo admin.js do controller para a chamada do atributo formulario_inclusao_noticia por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
	});

	app.post('/noticias/salvar', function(req,res){//metodo post pegando as noticias,importando a var app que contem as requisições,passando app como parametro
		index.app.controllers.add_product.adicionar_produto(app,req,res); /*rota do arquivo admin.js do controller para a chamada do atributo salvar_noticia por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */

	});
}
