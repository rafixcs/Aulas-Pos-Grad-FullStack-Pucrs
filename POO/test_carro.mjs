import { Carro } from "./carro.mjs";

class CarroComPlaca extends Carro {
    #_placa;

    constructor(placa, tanqueCapacidadeMax) {
        super(tanqueCapacidadeMax);
        this.#_placa = placa;
    }

    get placa() {
        return this.#_placa;
    }
}

export class Locadora {
    #_carros;
    constructor() {
        this.#_carros = [];
    }

    adicionaCarro(carro) {
        this.#_carros.push(carro);
        console.log(this.#_carros.length);
    }

    consultaCarros() {
        this.#_carros.forEach((carro) => console.log('Carro placa(' + carro.placa + '); tanque: ' + carro.tanque));
    }

    abasteceCarro(index, quantidade) {
        if (index >= 0 && index < this.#_carros.length) {
            this.#_carros[index].tanque = quantidade;
        }
    }
}


var a_locadora = new Locadora();
a_locadora.adicionaCarro(new CarroComPlaca('1231321', 50));
a_locadora.adicionaCarro(new Carro(100));
a_locadora.adicionaCarro(new Carro(120));

a_locadora.consultaCarros();

a_locadora.abasteceCarro(4, 122);
a_locadora.abasteceCarro(2, 10);
a_locadora.abasteceCarro(1, 66);
a_locadora.abasteceCarro(0, 75);

a_locadora.consultaCarros();
