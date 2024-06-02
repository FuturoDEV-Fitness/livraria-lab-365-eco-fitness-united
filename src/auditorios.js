const readline = require('readline/promises');
const Auditorio = require('./classes/Auditorio');
const AuditorioCrud = require('./classes/AuditorioCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            const nomeAuditorio = await rl.question("Qual é o nome do auditorio ?")
            const auditorio = new Auditorio(nomeAuditorio)
            const descricao = await rl.question("Informe uma descrição desse auditorio : ")
            auditorio.setDescricao = descricao
            const quantidadeDePessoasSuportadas = Number(await rl.question("Qual a quantidade de pessoas suportadas nesse auditorio ? "))
            auditorio.setQuantidadeDePessoasSuportadas = quantidadeDePessoasSuportadas
            console.log(auditorio.getCodigo)
            const crud = new AuditorioCrud()
            crud.criar(auditorio)
            rl.close();
            break;
        case 'deletar': {
            const nome = await rl.question("Qual o nome do auditorio que sera deletado ? ")
            const crud = new AuditorioCrud()
            crud.deletar(nome)
            rl.close();
            break;
        }
        case 'consultar': {
            const nome = await rl.question("Qual é o nome do auditorio que será consultado ? ")
            const crud = new AuditorioCrud()
            crud.consultar(nome)
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
