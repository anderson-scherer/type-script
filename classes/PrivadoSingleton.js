"use strict";
// Semelhante ao método estático, porém mais fácil para implementar heranças
class Unico {
    constructor() {
    }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().agora());
//# sourceMappingURL=PrivadoSingleton.js.map