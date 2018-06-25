/*//require é uma função js que permite incorporar outros arquivos*/
var express = require('express');//importando o módulo express 
var consign = require('consign');//importando o módulo consign
var bodyParser = require('body-parser')//importando um middleware body-parse que vai organizar os dados no formato Json
var expressValidator = require('express-validator');//informando que app é um módulo express

var app = express();
app.set('view engine','ejs');// informando para o express que o ejs é o engine de views 
app.set('views', './app/views');//aponta ao ejs onde está o caminho de views, informando que views está dento da pasta app dentro de noticias

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));
//parametrizamos como o bodyparser vai tratar os formularios. - utiliza json
//o parametro extended:true  - permite que seja implementada através de json as url codificadas

app.use(expressValidator());//execução do exprexxVallidator


consign()// //instanciando o método consign, o qual carrega automaticamente todas as rotas		
		.include('app/routes')//inlcui o diretório de rotas
		.then('config/conection_sql.js')//inclui a conexão com o banco de dados com extensão (js), para não entender que tem um subdiretório
		.then('app/models')//inclui o diretório de models
		.then('app/controllers')//incluir o diretório  controllers
		.into(app);  // variável para onde as rotas estão sendo referenciadas
	//o consign reconhece todos os arquivos da pasta routes,
	//módulos e inclui dentro do servidor - app
	
module.exports = app;//módulo retorna a variável app


/*Isabela Archanjo Batarce - 5A*/