class Data { 
    // Público
    dia: number;
    public mes: number;
    ano: number;

    constructor(
        dia: number = 1,
        mes: number = 1,
        ano: number = 1970
    ) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversario = new Data(3,10,2010);
console.log(aniversario);

const casamento = new Data;
console.log(casamento);
