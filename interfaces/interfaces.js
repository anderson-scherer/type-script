"use strict";
function saudarComoOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudaNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá ${this.nome} ${sobrenome}`);
    }
};
saudarComoOla(pessoa);
mudaNome(pessoa);
saudarComoOla(pessoa);
// saudarComoOla({ nome: 'teste', idade: 10, altura: 1.75 });
pessoa.saudar('Skywlaker');
class CLientes {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log(`Olá ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new CLientes();
meuCliente.nome = 'Han';
saudarComoOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // Math.pow(base,exp)
    // base ** exp
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(2, 3));
//# sourceMappingURL=interfaces.js.map