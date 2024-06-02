const crypto = require('crypto')

class Autor{
#codigo = ''
#nome = ''
#generoLiterario = ''


constructor(nome){
this.#nome = nome
this.#codigo = crypto.randomUUID() // Date.now // map.random --mais uma condição para nao repetir
}


get getNome(){
    this.#nome
}

set setNome(nome){
    this.#nome = nome
}


get getCodigo(){
    this.#codigo
}


get getGeneroLit(){
    this.#generoLiterario
}

set setGeneroLit(generoLiterario){
    this.#generoLiterario = generoLiterario
}


}

module.exports = Autor