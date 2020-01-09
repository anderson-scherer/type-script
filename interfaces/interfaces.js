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
//# sourceMappingURL=interfaces.js.map