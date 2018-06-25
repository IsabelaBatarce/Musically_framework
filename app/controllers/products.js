//exibir as notícias
module.exports.products = function(app, req, res){

	var connection = app.config.conection_sql();//caminho para dbCOnnection - na pasta config dentro da pasta app
	//depois do reactoring, recebemos o app por paramentro, então é somente,
	//recuperar o módulo dentro do app.
	//diminuimos a necessidade de ter requires nos projetos
	var productsModel = new index.app.models.productConnect(connection);//instanciando a classe NoticiasDAO
	//app.app significa: o primeiro é a aplicação, o segundo é a pasta app

	//agora ficou assim: o select (regra) foi para o arquivo de model
    productsModel.getProducts(function(error,result){//conectar no banco e selecionar - mostra result se der certo e error se der errado    	
		res.render("noticias/noticias",{noticias: result});//resultado - fazer um render (ejs) na view (noticias)
	});//chama o arquivo ejs (o qual possui JS e HTML) e junto com esse arquivo manda o parámetro result - notícias (formato Json) - vetor notícias
}

module.exports.noticia = function(app,req,res){
	
	/* Recebe o parametro enviado pelas views e envia esse parametro para o model(que fará o filtro do banco de dados)*/

	var connection = app.config.dbConnection(); // caminho para o dbConection e conectando com o banco de dados
	var noticiasModel = new app.app.models.NoticiasDAO(connection); /*instanciano NoticiasDao*/

	/*Verifica se exits uma notícia no parametro req.query*/
	
	if (req.query.id_noticia){

		var id_noticia = req.query; /*id_noticia recebe o parametro enviado pelas views, que contém o id da noticia a ser exibida*/
	}else{
		res.redirect("/noticias")
		return;
	}	

	noticiasModel.getNoticia(id_noticia,function(error, result){
		
		res.render("noticias/noticia", {noticia: result});//resultado - fazer um render (ejs) na view (noticias)
	});
}

module.exports.busca = function(app,req,res){
			
			var pesquisa = req.body.pesquisa; /*utiliza o body-parse para que a variável pesquisa receba o texto digitado para ser localizado*/
			var connection = app.config.dbConnection();
			var noticiasModel = new app.app.models.NoticiasDAO(connection);

			noticiasModel.buscaNoticias(pesquisa, function(erro,result){ /*executando um método buscaNoticias no arquivo de models passando a variável de callback*/
				res.render('noticias/noticias', { noticias : result});//resultado - fazer um render (ejs) na view (noticias) 
			});
	}

module.exports.excluir=function(app,req,res){  /*exclusão de uma notícia*/
	var pesquisa= req.body.pesquisa;
	var connection= app.config.dbConnection();
	var noticiasModel=new app.app.models.NoticiasDAO(connection);

	if (req.query.id_noticia) {
		var id_noticia=req.query;
	}else{
		res.redirect("/noticias")
		return;
	}

	noticiasModel.excluirNoticia(id_noticia,function(erro,result){
		res.redirect("/noticias")
	});

}


/*Isabela Archanjo Batarce - 5A*/