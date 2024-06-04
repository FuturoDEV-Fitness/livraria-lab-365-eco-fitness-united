const readline = require("readline/promises");
const Livro = require("./classes/Livro");
const LivroCrud = require("./classes/LivroCrud");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

async function run() {
  const resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  );

  switch (resposta) {
    case "criar":
      const tituloLivro = await rl.question("Qual o título do livro?");
      const isbnLivro = await rl.question("Qual o ISBN?");

      const novoLivro = new Livro(isbnLivro, tituloLivro);

      const qtdPagLivro = await rl.question("Qual o número de páginas?");
      const generoLivro = await rl.question("Qual o gênero literário?");
      const autorLivro = await rl.question("Qual o nome da(o) autor(a)?");
      const formatoLivro = await rl.question("Qual o formato do livro?");

      novoLivro.setQtdPaginas = qtdPagLivro;
      novoLivro.setGenero = generoLivro;
      novoLivro.setAutor = autorLivro;
      novoLivro.setFormato = formatoLivro;

      const livroCrud = new LivroCrud();

      livroCrud.criar(novoLivro);

      rl.close();
      break;
    case "deletar": {
     
      const isbnConsulta = await rl.question('Qual ISBN da obra que deseja excluir?')
      const livroCrud = new LivroCrud()
      livroCrud.deletar(isbnConsulta)

      rl.close();
      break;
    }
    case "consultar": {
     const livroConsulta = await rl.question('Qual livro deseja encontrar?')

     const livroCrud = new LivroCrud();
     livroCrud.consultar(livroConsulta)


      rl.close();
      break;
    }
    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();
