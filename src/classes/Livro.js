const crypto = require('crypto');

class Livro {
    #codigo;
    #nome;
    #quantidadeDePaginas;
    #genero;
    #autor;

    constructor(nome) {
        this.#codigo = crypto.randomUUID();
        this.#nome = nome;
        this.#quantidadeDePaginas = "";
        this.#genero = "";
        this.#autor = "";
    }

    get codigo() {
        return this.#codigo;
    }

    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }

    get quantidadeDePaginas() {
        return this.#quantidadeDePaginas;
    }
    set quantidadeDePaginas(quantidadeDePaginas) {
        this.#quantidadeDePaginas = quantidadeDePaginas;
    }

    get genero() {
        return this.#genero;
    }
    set genero(genero) {
        this.#genero = genero;
    }

    get autor() {
        return this.#autor;
    }
    set autor(autor) {
        this.#autor = autor;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            nome: this.#nome,
            quantidadeDePaginas: this.#quantidadeDePaginas,
            genero: this.#genero,
            autor: this.#autor
        };
    }
}

module.exports = Livro;

