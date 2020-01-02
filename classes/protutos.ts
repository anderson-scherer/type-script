class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0,
    ) {
        this.nome = nome;
        this.preco = preco;
        this.desconto= desconto;        
    }

    public precoComDesconto(): number {
        return this.preco * (1 - this.desconto);
    }

    public resumo(): string {
        return `Nome: ${this.nome} - Preço R$ ${this.preco}- Preço com desconto: R$ ${this.precoComDesconto()} - Desconto: Off ${this.desconto * 100}%`;
    }
}


const produtos = new Produto('Anderson',4.20, .05);
const produtos2 = new Produto('Anderson',100);

console.log(produtos.resumo());
console.log(produtos2.resumo());