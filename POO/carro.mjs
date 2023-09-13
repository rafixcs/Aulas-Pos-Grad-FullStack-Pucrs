export class Carro{
    #_tanque;
    #_capacidadeMax;

    constructor(capacidadeMax) {
        this.#_tanque = 0;
        this.#_capacidadeMax = capacidadeMax;
    }

    get tanque() {
        return this.#_tanque;
    }

    get capacidadeMax() {
        return this.#_capacidadeMax;
    }

    set tanque(val) {
        if (val >= 0) {
            if (val + this.#_tanque >= this.#_capacidadeMax) {
                this.#_tanque = this.#_capacidadeMax;
            }
            else {
                this.#_tanque+=val;
            }
        }

    }
}