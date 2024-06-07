const crypto = require("crypto")

class Auditorio {
    #codigo = ""
    #nome = ""
    #descricao = ""
    #quantidadeDePessoasSuportadas = 0
    constructor(nome) {
        this.#codigo = crypto.randomUUID()
        this.#nome = nome
    }

    get getCodigo () {
        return this.#codigo
    }

    set setNome (nome){
        this.#nome = nome
    }

    get getNome (){
        return this.#nome
    }

    set setDescricao (descricao){
        this.#descricao = descricao
    }

    get getDescricao () {
        return this.#descricao
    }

    set setQuantidadeDePessoasSuportadas (quantidadeDePessoasSuportadas) {
        this.#quantidadeDePessoasSuportadas = quantidadeDePessoasSuportadas
    }

    get getQuantidadeDePessoasSuportadas () {
        return this.#quantidadeDePessoasSuportadas
    }
}

module.exports = Auditorio;