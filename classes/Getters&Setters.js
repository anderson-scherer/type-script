"use strict";
// Notação Literal de Objeto
// const pessoaClassGet = {
//     _idade: 0,
//     get idade():number {
//         return this._idade;
//     },
//     set idade(valor: number) {
//         if(valor >= 0 && valor <= 120) {
//             this._idade = valor;
//         }
//     }
// }
class PessoaGet {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoaClassGet = new PessoaGet();
pessoaClassGet.idade = 10;
console.log(pessoaClassGet.idade);
//# sourceMappingURL=Getters&Setters.js.map