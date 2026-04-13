class Carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Porsche", 1972);

console.log(meuCarro.nome);