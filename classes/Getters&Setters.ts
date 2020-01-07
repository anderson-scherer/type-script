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
    private _idade: number = 0;

    get idade():number {
        return this._idade;
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}

const pessoaClassGet = new PessoaGet();
pessoaClassGet.idade = 10;
console.log(pessoaClassGet.idade);