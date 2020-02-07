function echo(objeto: any) {
    return objeto;
}

console.log(echo('João').length); // 4
console.log(echo(27).length); // undefind
console.log(echo({ nome: 'João' })); // { nome: "João" }

// Usando  Generics 
function echoMelhorado<T>(objeto: T): T {
    return objeto;
}

console.log(echoMelhorado('João').length); // 4
// console.log(echoMelhorado(27).length); // Error de compilador 
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: 'João' }).nome); // João

// Generics Disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5'); // erro de compilador
avaliacoes.push(5.5);
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 4])
imprimir<number>([1, 2, 4])
imprimir<string>(['1', '2', '4'])
imprimir<{ nome: string }>([
    { nome: 'João' },
    { nome: 'João' },
])

type Aluno = { nome: string };

imprimir<Aluno>([
    { nome: 'João' },
    { nome: 'João' },
])

// Tipo generics
type Echo = <T>(data: T) => T;
const chamarEco: Echo = echoMelhorado;

// const chamarEco: <T>(data: T) => T = echoMelhorado;

console.log(chamarEco<string>('Alguma Coisa'));

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

abstract class OperacaoBinaria<T, R> {
    constructor(
        public operando1: T,
        public operacao2: T
    ) { }

    abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operacao2;
    }
}

console.log(new SomaBinaria(3, 4).executar());