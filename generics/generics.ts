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
// avaliacoes.push('5.5'); // rro de compilador
avaliacoes.push(5.5); // rro de compilador
console.log(avaliacoes);

// Array

function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento));
}

imprimir([1,2,4])
imprimir<number>([1,2,4])
imprimir<string>(['1','2','4'])
imprimir< {nome: string} >([
    { nome : 'João'},
    { nome : 'João'},
])

type Aluno = {nome: string};

imprimir<Aluno>([
    { nome : 'João'},
    { nome : 'João'},
])