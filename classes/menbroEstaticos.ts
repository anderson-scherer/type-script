class Matematica { 
    static PI: number = 3.1416;

    static areaCirc(raio: number) {
        return this.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4));