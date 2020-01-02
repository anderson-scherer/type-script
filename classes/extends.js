"use strict";
class Carro1 {
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
class Ferrari extends Carro1 {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('f40', 324);
console.log(f40.acelerar());
console.log(f40);
//# sourceMappingURL=extends.js.map