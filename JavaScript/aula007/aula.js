class pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos.`)
    }
}

const vitor = new pessoa();
vitor.nome = "Vitor";
vitor.idade = 22;
vitor.descrever();

const lucas = new pessoa();
lucas.nome = "lucas";
lucas.idade = 23;
lucas.descrever();