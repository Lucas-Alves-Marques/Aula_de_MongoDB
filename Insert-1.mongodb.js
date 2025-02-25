// constante que define nome do banco de dado
const database = 'BD3-Aula';

// Define o banco de dados que será utilizado
use(database);

// Exemplo de um arquivo na coleção
db['Livraria'].insertOne(
    {
        "codigo": "2",
        "titulo": "As Cavernas de Aço 2",
        "autor": "Isaac Asimov",
        "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
        "valor": 240,
        "categoria": "Ficção Científica"
    }
);