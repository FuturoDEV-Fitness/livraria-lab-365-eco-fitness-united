const readline = require("readline/promises");
const Livro = require("./classes/Livro");
const LivroCrud = require("./classes/LivroCrud");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  const resposta = await rl.question(
    "Escolha uma ação (criar, deletar, alterar, consultar): "
  );

  switch (resposta) {
    case "criar":
      const tituloLivro = rl.question("Qual o título do livro?");
      const isbnLivro = rl.question("Qual o ISBN?");

      const novoLivro = new Livro(isbnLivro, tituloLivro);
      
      const qtdPagLivro = rl.question("Qual o número de páginas?");
      const generoLivro = rl.question("Qual o gênero literário?");
      const autorLivro = rl.question("Qual o nome da(o) autor(a)?");
      const formatoLivro = rl.question("Qual o formato do livro?");
   
      novoLivro.setQtdPaginas = qtdPagLivro
      novoLivro.setGenero = generoLivro
      novoLivro.setAutor = autorLivro
      novoLivro.setFormato = formatoLivro

const livroCrud = new LivroCrud()

livroCrud.criar(novoLivro)

      rl.close();
      break;
    case "deletar": {
      /* Coloque sua resposta aqui */
      rl.close();
      break;
    }
    case "consultar": {
      /* Coloque sua resposta aqui */
      rl.close();
      break;
    }
    default:
      console.log("Ação não reconhecida.");
      rl.close();
  }
}

run();
