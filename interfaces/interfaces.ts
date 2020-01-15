interface Humano {
    nome: string,
    idade?: number,
    [prop: string]: any, // Atributo Dinâmico
    saudar(sobrenome: string): void
}

function saudarComoOla(pessoa: Humano) {
    console.log(`Olá ${pessoa.nome}`);
}

function mudaNome(pessoa: Humano) {
    pessoa.nome = 'Joana';
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,

    saudar(sobrenome: string) {
        console.log(`Olá ${this.nome} ${sobrenome}`);
    }
}

saudarComoOla(pessoa);
mudaNome(pessoa);
saudarComoOla(pessoa)
// saudarComoOla({ nome: 'teste', idade: 10, altura: 1.75 });
pessoa.saudar('Skywlaker');

class CLientes implements Humano {
    nome: string = '';
    ultimaCompra: Date = new Date();

    saudar(sobrenome: string) {
        console.log(`Olá ${this.nome} ${sobrenome}`);
    }
}

const meuCliente = new CLientes();
meuCliente.nome = 'Han';
saudarComoOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);

// Interface Função
interface FuncaoCalculo {
    (a: number, b:number): number;
}

let potencia: FuncaoCalculo;

potencia = function(base: number, exp: number): number {
    // Math.pow(base,exp)
    // base ** exp
    return Array(exp).fill(base).reduce((t, a ) => t * a);
}

console.log(potencia(2, 3));

// Herança 
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstractABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void    
}

interface Object {
    log(): void;
    warn(): void;
}

Object.prototype.log = function() {
    console.log(this.toString());
}

Object.prototype.warn = function() {
    console.warn(this.toString());
}

const x = 2;
const y = 3;
const z = 4;

x.log()
z.log()
z.log()

const cli = {
        nome: 'Pedro',
        toString() { return this.nome}
    };

cli.log()
cli.warn()