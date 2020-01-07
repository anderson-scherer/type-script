class Matematica { 
    static PI: number = 3.1416;

    static areaCirc(raio: number) {
        return Matematica.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4));