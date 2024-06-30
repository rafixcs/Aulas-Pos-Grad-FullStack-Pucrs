const soap = require('soap');
const express = require('express');
const fs = require('fs');

const PORT = 8001;

const app = express();

var myservice = {
    ws: {
        calc: {
            somar : function(args) {
                var n = 1*args.a + 1*args.b;
                return { sumres: n};
            },
            multiplicar : function(args) {
                var n = 1*args.a * 1*args.b;
                return { mulres: n};
            }
        }
    }

}

const xml = fs.readFileSync('wscalc1.wsdl', 'utf-8');

app.listen(PORT, function() {
    soap.listen(app, '/wscalc1', myservice, xml, function(){
        console.log('Server initialized at port ' + PORT)
    })
});
