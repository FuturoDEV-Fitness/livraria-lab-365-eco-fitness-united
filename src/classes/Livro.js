class Livro {
    #isbn = '' // 9789510445365 (13dígitos)
    #titulo = ''
    #qtdPaginas = 0
    #genero = ''
    #autor = ''
    #formato = '' //físico/audio/digital

    constructor(isbn, titulo) {
       this.#isbn = isbn
       this.#titulo = titulo
    }

get getIsbn(){
    return this.#isbn
}

set setIsbn(isbn){
    this.#isbn = isbn
}
    

get getTitulo(){
    return this.#titulo
}

set setTitulo(titulo){
    this.#titulo = titulo
}

get getQtdPaginas(){
    return this.#qtdPaginas
}

set setQtdPaginas(qtdPaginas){
    this.#isbn = isbn
}

get getGenero(){
    return this.#genero
}

set setGenero(genero){
    this.#genero = genero
}

get getAutor(){
    return this.#autor
}

set setAutor(autor){
    this.#autor = autor
}


get getFormato(){
    return this.#formato
}

set setFormato(formato){
    this.#formato = formato
}

}

module.exports = Livro;