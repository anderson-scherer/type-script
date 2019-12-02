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


class DataEsperta { 

    constructor(
        public dia: number = 1,
        public mes: number = 1,
        public ano: number = 1970
    ) {        
    }
}

const aniversarioEsperto = new DataEsperta(3,10,2010);
console.log(aniversarioEsperto);

const casamentoEspoerto = new DataEsperta;
console.log(casamentoEspoerto);


