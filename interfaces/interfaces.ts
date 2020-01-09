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
pessoa.saudar('Skywlaker')