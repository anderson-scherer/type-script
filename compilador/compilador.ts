let canal: string = 'Gaveta';
let inscritos: number = 610234;

console.log(`Canal = ${canal}`);

nome = 'Pedro';
console.log(`Nome = ${nome}`);

(function(){
    let nome: string = 'Anderson';
    console.log(nome);
})()

function soma(a:any, b:any) {
    return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

function saudar(isManha: boolean): string {
    let saudacao: string;    

    if(isManha){
        saudacao = 'Bom dia';
    } else {
        saudacao = 'Boa tarde';
    }

    return saudacao;
}
