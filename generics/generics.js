"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length); // 4
console.log(echo(27).length); // undefind
console.log(echo({ nome: 'João' })); // { nome: "João" }
// Usando  Generics 
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length); // 4
// console.log(echoMelhorado(27).length); // Error de compilador 
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João' }).nome); // João
// Generics Disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5'); // erro de compilador
avaliacoes.push(5.5);
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 4]);
imprimir([1, 2, 4]);
imprimir(['1', '2', '4']);
imprimir([
    { nome: 'João' },
    { nome: 'João' },
]);
imprimir([
    { nome: 'João' },
    { nome: 'João' },
]);
const chamarEco = echoMelhorado;
// const chamarEco: <T>(data: T) => T = echoMelhorado;
console.log(chamarEco('Alguma Coisa'));
// Classe
// class OperacaoBinaria {
//     constructor(
//         public operando1: any,
//         public operacao2: any
//     ) { }
//     executar() {
//         return this.operando1 + this.operacao2
//     }
// }
// console.log(new OperacaoBinaria('Bom', 'Dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'Opa').executar());
// console.log(new OperacaoBinaria({}, {}).executar());
class OperacaoBinaria {
    constructor(operando1, operacao2) {
        this.operando1 = operando1;
        this.operacao2 = operacao2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operacao2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
//# sourceMappingURL=generics.js.map