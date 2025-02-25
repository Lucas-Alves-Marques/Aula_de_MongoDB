// constante que define nome do banco de dado
const database = 'BD3-Aula';

// Define o banco de dados que será utilizado
use(database);

// Seleciona todos os documentos sem criterios
// db['Livraria'].find();

// Seleciona um ou mais documentos a partir de criterios de busca
// db['Livraria'].find({"categoria":"Fantasia Heroica"});

// Seleciona um ou mais documentos a partir de criterios de busca
// e exclui uma ou mais propriedades da exibição
db['Livraria'].find({"categoria":"Fantasia Heroica"},{"_id": 0, 'codigo':0, "valor": 0});
// O numero 0 significa que o valor será falso (não vira) e 1 é verdadeiro (irá aparecer)