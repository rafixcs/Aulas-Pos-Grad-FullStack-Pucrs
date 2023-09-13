console.log('Hello, world');

// var -> declaracao para variaveis globais
// let -> delcaracao para variaveis dentro de um escopo

function AvaliaParidade(limiteSuperior) {
    for(let i=0; i<limiteSuperior; i++) {
        if(i%2==1) {
            console.log(i + ' eh um numero impar');
        } else {
            console.log(i + ' eh um numero par');
        }
    }
}


AvaliaParidade(10);