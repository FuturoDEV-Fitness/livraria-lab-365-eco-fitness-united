const fs = require("fs");

class AutorCrud {
  constructor() {
    this.filePath = "./src/files/autores.json";
  }

  criar(autor) {
    

    fs.writeFileSync(
        this.filePath,
        JSON.stringify({nome: 'teste'}),
        'utf-8'

    )
  }
}

module.exports = AutorCrud;
