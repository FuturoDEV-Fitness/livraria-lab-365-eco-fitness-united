const readline = require('readline/promises');
const Livro = require('./classes/Livro');
const LivroCrud = require('./classes/LivroCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const crud = new LivroCrud();

async function run() {
    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nomeCriar = await rl.question("Qual o nome do livro? ");
            const genero = await rl.question("Qual o gênero literário? ");
            const quantidadeDePaginas = await rl.question("Qual o número de páginas do livro? ");
            const autor = await rl.question("Quem é o autor do livro? ");
            const livro = new Livro(nomeCriar);
            
            livro.genero = genero;
            livro.quantidadeDePaginas = quantidadeDePaginas;
            livro.autor = autor;
            
            crud.criar(livro);

            console.log('Livro criado com sucesso!');
            rl.close();
            break;
            
        case 'deletar':
            const nomeDeletar = await rl.question("Qual o nome do livro que deseja deletar? ");
            if (crud.deletar(nomeDeletar)) {
                console.log('Livro deletado com sucesso!');
            } else {
                console.log('Livro não encontrado.');
            }
            rl.close();
            break;

        case 'alterar':
            const nomeAlterar = await rl.question("Qual o nome do livro que deseja alterar? ");
            const novoNome = await rl.question("Novo nome do livro: ");
            const novoGenero = await rl.question("Novo gênero literário: ");
            const novaQuantidadeDePaginas = await rl.question("Novo número de páginas: ");
            const novoAutor = await rl.question("Novo autor do livro: ");

            const novosDados = {
                nome: novoNome,
                genero: novoGenero,
                quantidadeDePaginas: novaQuantidadeDePaginas,
                autor: novoAutor
            };

            if (crud.alterar(nomeAlterar, novosDados)) {
                console.log('Livro alterado com sucesso!');
            } else {
                console.log('Livro não encontrado.');
            }
            rl.close();
            break;

        case 'consultar':
            const nomeConsultar = await rl.question("Qual o nome do livro que deseja consultar? ");
            const livroConsultado = crud.consultar(nomeConsultar);
            if (livroConsultado) {
                console.log('Livro encontrado:', livroConsultado);
            } else {
                console.log('Livro não encontrado.');
            }
            rl.close();
            break;

        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }
}

run();

