class Carro{
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velociaddeMaxima: number = 200,
        ) {
    }

    private alterarVelocidade(delta: number): number {
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

const carro1 = new Carro('Ford', 'Focus', 185);
Array(50).fill(0).forEach(() => {
    carro1.acelerar()
});

Array(30).fill(0).forEach(() => {
    carro1.frear()
});

console.log(carro1);    