class Carro1{
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velociaddeMaxima: number = 200,
        ) {
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelodidade = this.velocidadeAtual + delta;
        const velociadeValida = novaVelodidade >= 0 && novaVelodidade <= this.velociaddeMaxima;

        if (velociadeValida) {
            this.velocidadeAtual = novaVelodidade;
        } else {
            this.velocidadeAtual =  delta > 0 ? this.velociaddeMaxima : 0;
        }

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}


class Ferrari extends Carro1 {       
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima );
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('f40', 324);
console.log(f40.acelerar());
console.log(f40);