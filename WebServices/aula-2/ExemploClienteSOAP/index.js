var soap = require('soap');

/*
    // First example

var url1 = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url1, function(err, cliente) {
    //console.log('Descreve -> ', cliente.describe().Calculator.CalculatorSoap);

    cliente.Divide({intA: 32, intB: 2}, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(`A divisão dos valores é ${result.DivideResult}`);
        }
    });
});*/

// example testing local soap server
var url = 'http://localhost:8001/wscalc1?wsdl'

soap.createClient(url, function(err, client){
    if(err) {
        console.error(err);
        return;
    }

    //console.log('Describe -> ', client.describe().ws.calc);
    client.somar({a: 2, b: 3}, function(err, result){
        if(err){
            console.error(err);
        } else {
            console.log(`O resultado da soma eh ${result.sumres}`)
        }
    });

    client.multiplicar({a: 2, b: 3}, function(err, result){
        if(err){
            console.error(err);
        } else {
            console.log(`O resultado da multiplicacao eh ${result.mulres}`)
        }
    });

});

