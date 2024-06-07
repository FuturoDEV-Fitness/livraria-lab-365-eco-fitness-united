const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'livros.json');

class LivroCrud {
    constructor() {
        this.livros = this.loadLivros();
    }

    loadLivros() {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(data);
        }
        return [];
    }

    saveLivros() {
        fs.writeFileSync(filePath, JSON.stringify(this.livros, null, 2));
    }

    criar(livro) {
        this.livros.push(livro);
        this.saveLivros();
    }

    deletar(nome) {
        const index = this.livros.findIndex(livro => livro.nome === nome);
        if (index !== -1) {
            this.livros.splice(index, 1);
            this.saveLivros();
            return true;
        } else {
            return false;
        }
    }

    alterar(nome, novosDados) {
        const livro = this.livros.find(livro => livro.nome === nome);
        if (livro) {
            Object.assign(livro, novosDados);
            this.saveLivros();
            return true;
        } else {
            return false;
        }
    }

    consultar(nome) {
        return this.livros.find(livro => livro.nome === nome);
    }
}

module.exports = LivroCrud;

