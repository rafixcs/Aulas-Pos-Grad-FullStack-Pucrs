class Pessoa {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    };

    ola() {
        console.log("Olá!");
    };
}


class Estudante extends Pessoa {
    #id;
    constructor(name, birthDate, id) {
        super(name, birthDate);
        this.#id = id;
    };
    
    getMatricula() {
        return this.#id;
    }

    ola() {
        super.ola();
        console.log("Colega");
    }
}