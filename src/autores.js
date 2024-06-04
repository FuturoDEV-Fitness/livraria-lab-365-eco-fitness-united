const readline = require("readline/promises");
const Autor = require("./classes/Autor");
const AutorCrud = require("./classes/AutorCrud");

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

    const nomeAut = await rl.question("Qual o nome do(a) autor(a)?");
      const autor = new Autor(nomeAut);

      const generoLit = await rl.question("Qual o gênero literário?");
      autor.setGeneroLit = generoLit;

      const autorCrud = new AutorCrud()

      autorCrud.criar(autor)

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
