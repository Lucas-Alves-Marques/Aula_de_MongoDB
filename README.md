# 📘 Aula de MongoDB

Este projeto foi desenvolvido como repositório de aulas de Banco de Dados 3 na ETEC de Embu, com o objetivo de estudar e praticar as operações que podem ser realizadas em um banco NoSQL, utilizando o MongoDB como tecnologia principal.

A estrutura do projeto reúne scripts de aula para demonstrar desde a criação do banco e da coleção até operações de consulta, atualização, exclusão e manipulação de documentos. O foco principal foi entender como o MongoDB trabalha com documentos, coleções e consultas em um ambiente de dados não relacional.

## 🧠 Objetivo do projeto

O repositório foi pensado para ajudar no aprendizado de:

- conceitos básicos de MongoDB;
- criação e uso de bancos e coleções;
- inserção de documentos em massa e individualmente;
- consultas com filtros e projeções;
- atualização e remoção de dados;
- uso de expressões e operadores do MongoDB;
- noções práticas de modelagem documental.

## 📚 Funcionalidades abordadas

### 1. 💾 Criação do banco e da coleção

Os scripts iniciais mostram como o banco é definido e como a coleção pode ser criada ou utilizada:

```javascript
const database = 'BD3-Aula';
use(database);
```

Em seguida, o projeto trabalha com a coleção `Livraria`, demonstrando a ideia de que, em um banco NoSQL, os dados são armazenados em coleções compostas por documentos, e não em tabelas como no modelo relacional.

### 2. 📝 Inserção de dados

O repositório apresenta operações de inserção, incluindo a criação de documentos individuais e a inserção múltipla com `insertMany`.

Exemplo de inserção em massa:

```javascript
db['Livraria'].insertMany([
  {
    codigo: "1",
    titulo: "As Cavernas de Aço",
    autor: "Isaac Asimov",
    valor: 120,
    categoria: "Ficção Científica"
  }
]);
```

Essa prática ajuda a entender como organizar registros em formato JSON-like e como inserir múltiplos documentos em uma única operação.

### 3. 🔎 Consultas com `find()`

Uma parte importante do projeto são as consultas realizadas com `find()`, incluindo:

- busca de todos os documentos;
- filtro por categoria;
- pesquisa por autor;
- seleção de campos específicos;
- projeção para remover campos da resposta.

Exemplo:

```javascript
db['Livraria'].find({ "categoria": "Fantasia Heroica" });
```

Outro exemplo de projeção:

```javascript
db['Livraria'].find({ "categoria": "Fantasia Heroica" }, { _id: 0, codigo: 0, valor: 0 });
```

Esse tipo de operação é essencial para entender como o MongoDB filtra e apresenta informações de acordo com a necessidade da aplicação.

### 4. 📊 Ordenação e filtragem

O repositório também explora consultas que envolvem ordenação dos resultados com `sort()`. Isso permite organizar os documentos conforme critérios como preço, autor ou categoria.

Exemplos:

```javascript
db['Livraria'].find({ autor: 'J.R.R Tolkien' }).sort({ valor: 1 });
```

```javascript
db['Livraria'].find({ autor: 'J.R.R Tolkien' }).sort({ valor: -1 });
```

A ordenação facilita a visualização de resultados em ordem crescente ou decrescente, sendo muito útil em aplicações que trabalham com listagens e comparação de dados.

### 5. 🧮 Operadores relacionais e lógicos

O projeto também foi usado para estudar operadores como:

- `$eq` para igualdade;
- `$gt` para maior que;
- `$gte` para maior ou igual;
- `$lt` para menor que;
- `$lte` para menor ou igual;
- `$in` para valores em uma lista;
- `$and` para múltiplas condições;
- `$or` para alternativas.

Esses operadores permitem construir consultas mais robustas e versáteis, algo fundamental em qualquer sistema que precisa filtrar informações com precisão.

### 6. 🔍 Busca textual com regex

Foi demonstrado também o uso de expressões regulares para localizar textos sem considerar diferenciação entre maiúsculas e minúsculas:

```javascript
db['Livraria'].find({ 'descricao': /robôs/i });
```

Esse recurso é muito útil para pesquisas por palavras-chave, termos parciais ou descrições textuais dentro dos documentos.

### 7. ✏️ Atualização de documentos

O projeto mostra como atualizar registros com `updateOne()` e `updateMany()`:

```javascript
db['Livraria'].updateOne(
  { titulo: 'O Sol Desvelado' },
  { $set: { valor: 150 } }
);
```

```javascript
db['Livraria'].updateMany(
  { autor: 'J.R.R Tolkien' },
  { $set: { autor: 'John Ronald Revel Tolkien' } }
);
```

Esses exemplos demonstram como alterar dados específicos ou aplicar mudanças em vários documentos ao mesmo tempo.

### 8. 🗑️ Exclusão de dados

O projeto também aborda operações de remoção com `deleteOne()` e `deleteMany()`, permitindo que o aluno compreenda como excluir documentos únicos ou grupos de registros.

Exemplo:

```javascript
db['Livraria'].deleteOne({ titulo: 'As Cavernas de Aço 2' });
```

```javascript
db['Livraria'].deleteMany({ autor: 'Isaac Asimov' });
```

Essa parte é essencial para entender a manutenção e o gerenciamento do banco durante o ciclo de vida dos dados.

## 🧱 Estrutura dos documentos

Os dados da coleção `Livraria` são armazenados em documentos com campos como:

- `codigo`;
- `titulo`;
- `autor`;
- `descricao`;
- `imagem`;
- `valor`;
- `categoria`.

Um documento pode ser representado assim:

```json
{
  "codigo": "1",
  "titulo": "As Cavernas de Aço",
  "autor": "Isaac Asimov",
  "descricao": "História de ficção científica com robôs e mistério.",
  "imagem": "/livros/cavernas_aco.jpg",
  "valor": 120,
  "categoria": "Ficção Científica"
}
```

Essa estrutura ilustra a flexibilidade do MongoDB, que trabalha com documentos em formato BSON/JSON e permite armazenar informações em um formato mais dinâmico do que o modelo relacional tradicional.

## ⚙️ Tecnologias e ferramentas utilizadas

O projeto faz uso das seguintes tecnologias:

- MongoDB: banco de dados NoSQL orientado a documentos;
- Mongo Shell (mongosh): ambiente para execução de comandos JavaScript no banco;
- JavaScript: linguagem usada para escrever os scripts de aula;
- JSON/BSON: formatos de representação dos documentos armazenados;
- Operadores do MongoDB: filtros, comparações e consultas condicionais;
- Coleções e documentos: principais estruturas utilizadas no NoSQL.

## 🚀 Como executar

Para utilizar os scripts do projeto, siga os passos abaixo:

1. Verifique se o MongoDB está instalado e em execução;
2. Abra o terminal no diretório do projeto;
3. Inicie o MongoDB Shell com o comando:

```bash
mongosh
```

4. Carregue um dos arquivos `.mongodb.js`:

```javascript
load('Aula1.mongodb.js')
```

ou

```javascript
load('Insert-Many.mongodb.js')
```

5. Os comandos serão executados no banco `BD3-Aula` e na coleção `Livraria`.

## 🎯 Conclusão

Este projeto foi fundamental para compreender a estrutura e a dinâmica de um banco de dados NoSQL, principalmente no contexto das aulas de Banco de Dados 3. Através dos scripts, foi possível estudar e praticar as principais operações do MongoDB, desde a criação dos dados até consultas, atualizações e exclusões.

O repositório funciona como um material de apoio para quem deseja entender melhor os conceitos de banco NoSQL e a lógica de manipulação de documentos em MongoDB.
