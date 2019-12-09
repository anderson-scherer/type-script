"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 10, 2010);
console.log(aniversario);
const casamento = new Data;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 10, 2010);
console.log(aniversarioEsperto);
const casamentoEspoerto = new DataEsperta;
console.log(casamentoEspoerto);
//# sourceMappingURL=classes.js.map