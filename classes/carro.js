"use strict";
class Carro {
    constructor(marca, modelo, velociaddeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velociaddeMaxima = velociaddeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelodidade = this.velocidadeAtual + delta;
        const velociadeValida = novaVelodidade >= 0 && novaVelodidade <= this.velociaddeMaxima;
        if (velociadeValida) {
            this.velocidadeAtual = novaVelodidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velociaddeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Focus', 185);
Array(10).fill(0).forEach(() => {
    carro1.frear();
});
console.log(carro1);
//# sourceMappingURL=carro.js.map