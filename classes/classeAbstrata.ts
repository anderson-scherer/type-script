abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]) : void;

    getResultado():number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]) : void {
        this.resultado = numeros.reduce((temp, acm) => temp + acm);
    }        
}


class Multiplicacao extends Calculo {
    executar(...numeros: number[]) : void {
        this.resultado = numeros.reduce((temp, acm) => temp * acm);
    }        
}

let c1: Calculo = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());