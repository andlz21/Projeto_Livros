const livros = require('./database')

// pegar input de usuária por categoria

// Se for SIM, mostra as categorias disponíveis, pergunta qual ela escolhe

// Se for NÃO, mostra todos os livros em ordem crescente das quantidades de páginas


const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')


if (entradaInicial.toLocaleUpperCase( ) ===  'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('Produtividade e estilo de vida','/Tecnologia','/Games')
    
    const entradaCategoria = readline.question('Qual categoria você deseja: ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)

} else {

  const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
  console.log('Essas são todos os livros disponíveis: ')
  console.table(livrosOrdenados)
}


