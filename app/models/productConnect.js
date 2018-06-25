function ProductConnect(connection){//transformando os models em classes
	this._connection=connection;//atributo connection que será utilizado pelas funções
	
}

ProductConnect.prototype.getProducts= function(id_product,callback){//exporta a função anonima recebendo 2 parametros, connection e callback,protptype esta inserindo metodos na classe 
	this._connection.query('select*from products where id_product='+ id_product.id_product, callback);//connection.query selecionando uma notícia específica (linha da tabela) diretamente no banco
}

ProductConnect.prototype.addProduct=function(product,callback){//prototype insere esse método (salvarNoticia) na classe
	this._connection.query('insert into products set?',product, callback);//connection.query inserindo na tabela diretamente no banco

}



ProductConnect.prototype.searchProducts=function(search,callback){/* método recebe o parâmetro pesquisa, enviado pelo controller noticias.js e a função de callback*/

	this._connection.query("select*from products where nome like "%" + search ,callback);/*a cláusula like permite buscar  em qualque parte do texto. Neste caso estamos buscando no campo título*/
}

ProductConnect.prototype.removeProduct=function(id_product, callback){
//prototype insere esse método (salvarNoticia) na classe
	this._connection.query("delete from products where id_product="+ id_product.id_product,callback); //connection.query inserindo na tabela diretamente no banco

}

	module.exports=function(){
	return ProductConnect;//retorna a classe
}

/*Isabela Archanjo Batarce - 5A*/
