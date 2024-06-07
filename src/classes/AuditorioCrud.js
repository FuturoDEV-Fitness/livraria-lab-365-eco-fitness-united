const fs = require('fs')

class AuditorioCrud {
    
    constructor() {
        this.filePath = './src/files/auditorios.json';
    }

    criar(auditorio){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        conteudoAtual.push({
            codigo : auditorio.getCodigo,
            nome : auditorio.getNome,
            descricao : auditorio.getDescricao,
            quantidadeDePessoasSuportadas: auditorio.getQuantidadeDePessoasSuportadas
        })
        fs.writeFileSync(
            this.filePath, 
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )
    }

    consultar(nome) {
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        const auditorioEncontrado = conteudoAtual.find(auditorio => auditorio.nome === nome)

        if(auditorioEncontrado){
            console.log(auditorioEncontrado)
        }
        else{
            console.log("Auditorio não encontrado")
        }
    }

    deletar(nome){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
        const conteudoAtualizado = conteudoAtual.filter((auditorio) => {
            return auditorio.nome !== nome
        })
        fs.writeFileSync(
            this.filePath, 
            JSON.stringify(conteudoAtualizado, null, 2),
            'utf-8'
        )

    }
}

module.exports = AuditorioCrud;