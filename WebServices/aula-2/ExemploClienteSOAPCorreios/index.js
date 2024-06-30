var soap = require('soap');
var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, function(err, client) {
    //console.log(client.describe().AtendeClienteService.AtendeClientePort.consultaCEP)

    client.consultaCEP({cep: '94035340'}, function(err, res){
        if(err){
            console.log(err);
        } else {
            console.log(res);
        }
    })
})
