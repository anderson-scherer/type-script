// // let & const
// let seraQuePode = '?';
// console.log('hoisting', seraQuePode);

// let estaFrio = true;

// if (estaFrio) {
//     let acao = 'Colocar o casaco'    ;
//     console.log(acao);
// }

// const cpf: string = '123.456.789-12'
// // cpf = '987.654.321-98';
// console.log(cpf);

// var segredo = 'externo';

// function revelar() {
//     const segredo = 'interno';
//     console.log(segredo);
// }

// revelar();
// console.log(segredo);

// { 
//     {
//         const dev = 'teste';
//         console.log(dev);
//     }
// }

// // Arrow Function
// function somar(n1: number, n2:number): number {
//     return n1 + n2;
// }

// console.log(somar(2,2));

// const subtrair = (n1: number, n2: number): number => n1 - n2;
// console.log(subtrair(2,1));

// const saudacao = () => console.log('olá');
// saudacao();

// const falarCom = (pessoa: string) => console.log(pessoa);
// falarCom('pessoa')

// // function nomalComThis() {
// //     console.log(this);
// // }

// // const normalComThisEspecial = nomalComThis.bind(2);
// // nomalComThis();
// // normalComThisEspecial();

// // // this ???
// // console.log(this);
// // const arrowComThis = () => console.log(this);
// // arrowComThis();

// // const arrowComThisEspecial = arrowComThis.bind('teste');
// // arrowComThisEspecial()

// // Parâmetro Padrão

// function contagemRegressiva (inicio: number = 3, fim: number = inicio) {
//     console.log(inicio, fim);

//     while (inicio > 0) {
//         inicio--;
//         console.log(inicio);
//     }
//     console.log('fim');
// }

// contagemRegressiva();
// contagemRegressiva(8)

// // REST & SPREAD 
// const numbers = [1, 10, 99, -5, 200];
// console.log(Math.max(...numbers));

// const turmaA : string[] = ['joão', 'maria', 'fernanda'];
// const turmaB : string[] = ['fernando', 'miguel', 'lorena', ...turmaA];
// console.log(turmaB);

// // Destructuring (Array)
// const caracteristicas = ['Motor Zetec', 2020];
// // const motor = caracteristicas[0];
// // const ano = caracteristicas[1];

// const [ motor, ano ] = caracteristicas;

// // Destructuring (Object)
// const item = {
//     nome: 'SSD',
//     preco: 200,
//     caracteristicas: {
//         w: 'Importar',
//     }
// }

// //Alias
// const { nome: n, preco: p, caracteristicas: { w } } = item;
// console.log(n, p, w);

// callback
// function esperar3s(callback: (dado: string) => void) {
//     setTimeout(() => {
//         callback('3s')
//     }, 3000);
// };

// esperar3s(function(resultado: string) {
//     console.log(resultado);
// });

 
// // Promises
// function esperar3sPromise() {
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve('3s promise')
//         }, 3000);
//     });
// }
 
// esperar3sPromise()
//     .then(dado => console.log(dado));

// Estudar Iteratos, Generators, Async ...

// fetch('https://swdapi.co/api/people/1')
//     .then(res => res.json())
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilms => resFilms.json())
//     .then(filme => console.log(filme))
//     .catch(res => console.log('Catch!!!!', res))
