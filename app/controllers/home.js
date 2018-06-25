/*modulo exporta atributos ( os quais possuem funções ) que serão chamados no arquivo de rotas,por meio de três parametros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente*/

module.exports.home = function(app,req,res){

	var connection = app.config.conection_sql();//realizando a conexão com o banco
	var productModel = new index.app.models.productConnect(connection); /*instancia model*/

	noticiasModel.getProducts(function(error,result){//selecionado o metodo de pegar as 5 ultimas noticias que esta no models 
		res.render("home/home", {products:result});/*método responsável por retornar para a view um json com essas 5 últimas notícias*/
	});
}
	

	/*Isabela Archanjo Batarce - 5A*/