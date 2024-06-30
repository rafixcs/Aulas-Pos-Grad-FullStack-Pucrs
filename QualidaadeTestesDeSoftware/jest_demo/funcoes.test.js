const funcoes = require('./funcoes')

test('Dois mais dois devera ser quatro',() => {
    expect(funcoes.somarDoisValores(2,2))
    .toBe(4);
});

test('Deve ser null', () => {
    expect(funcoes.sempreNulo())
    .toBeNull();
});

// Codigos validos: 100, 101, 500, 999
// Codigos invalidos: -1, 5, 1000, etc

test('Codigo 100 deve ser permitido', () => {
    expect(funcoes.codigoValido(100))
    .toBeTruthy();
})

test('Codigo 100 deve ser permitido', () => {
    expect(funcoes.codigoValido(-1))
    .toBeFalsy();
})

// Escrever o teste primeiramente

// Inverter strings
// Java -> avaJ

test('Deve inverter uma string Java -> avaJ', () => {
    expect(funcoes.inverterString('Java'))
    .toEqual('avaJ');
});


// DANIEL -> LEINAD
// ANA -> ANA
// Jest -> tseJ

const casosInversaoStrings = [['DANIEL', 'LEINAD'], ['ANA', 'ANA'], ['Jest', 'tseJ']];
describe('Inversao de Strings', ()=> {
    test.each(casosInversaoStrings)(
        'inversao de %p -> %p',
        (original, inversaoEsperada) => {
            const resultado = funcoes.inverterString(original);
            expect(resultado).toEqual(inversaoEsperada);
        }
    )
})


// Teste de chamadas de APIs
// jsonplaceholder.typicode.com
// Usando promise
test('[Promise] Deve carregar o primeiro usuario de teste -> Leanne Graham', () => {
    expect.assertions(1); //por causa da chamada assincrona
    return funcoes.buscarUsuario1().then(dados => {
        expect(dados.name).toEqual('Leanne Graham');
    })
})

// Usando Async Await
test('[Async] Deve carregar o primeiro usuario de teste -> Leanne Graham', async () => {
    expect.assertions(1); //por causa da chamada assincrona
    const dados = await funcoes.buscarUsuario1();
    expect(dados.name).toEqual('Leanne Graham');
})


