const fs = require("fs");
class LivroCrud {
  constructor() {
    this.filePath = "./src/files/livros.json";
  }

  criar(livro) {
    const conteudoArmazenado = JSON.parse(
      fs.readFileSync(this.filePath, "utf-8")
    );

    conteudoArmazenado.push({
      isbn: livro.getIsbn,
      titulo: livro.getTitulo,
      qtdPaginas: livro.getQtdPaginas,
      genero: livro.getGenero,
      autor: livro.getAutor,
      formato: livro.getFormato,
    });

    fs.writeFileSync(
      this.filePath,
      JSON.stringify(conteudoArmazenado, null, 2),
      "utf-8"
    );
  }

  consultar(livroConsulta) {
    const conteudoArmazenado = JSON.parse(
      fs.readFileSync(this.filePath, "utf-8")
    );

    const livroBuscado = conteudoArmazenado.find((livro) => {
      return livro.titulo === livroConsulta;
    });
    //const livroBuscado = conteudoArmazenado.find(titulo => titulo===livroBuscado) <-- VERSÃO PROFESSOR

    if (!livroBuscado) {
      console.log(`Obra não encontrada!`);
    } else {
      console.log(livroBuscado);
    }
  }
  //consulta do DELETE por ISBN porque cada formato de livro possui ISBN próprio
  deletar(isbnConsulta) {
    //ler o arquivo
    //busca com FILTER - delete dentro dele
    //devolve array com a filtragem
    //push com array filtrado
    //apagar
    
    const arquivoLido = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));

    const obraParaExcluir = arquivoLido.find((obra) => obra.isbn === isbnConsulta);
    const arquivoFiltrado = arquivoLido.filter(
      (obra) => obra.isbn !== isbnConsulta
    );

    if (arquivoFiltrado.length === arquivoLido.length) {
      console.log(`Nenhuma obra encontrada com ISBN: ${isbnConsulta}`);
    } else {
      console.log(
        `A obra com ISBN: ${isbnConsulta} (${obraParaExcluir.titulo}) foi excluída!`
      );

      fs.writeFileSync(this.filePath, JSON.stringify(arquivoFiltrado, null, 2)),
        "utf-8";
    }
  }
}

module.exports = LivroCrud;
