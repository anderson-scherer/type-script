"use strict";
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `Nome: ${this.nome} - Preço R$ ${this.preco}- Preço com desconto: R$ ${this.precoComDesconto()} - Desconto: Off ${this.desconto * 100}%`;
    }
}
const produtos = new Produto('Anderson', 4.20, .05);
const produtos2 = new Produto('Anderson', 100);
console.log(produtos.resumo());
console.log(produtos2.resumo());
//# sourceMappingURL=protutos.js.map