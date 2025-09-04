const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe ('Testes da Função de Soma', function() {
    it('A função deve ser capaz de somar dois números positivos', function  () {
        // coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5, 3);

        // compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        // coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50, -15);

        // compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);
    });

    it('A função deve ser capaz de somar dois números zeros', function () {
        // coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(0, 0);

        // compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(0);
      });

      it('A função deve ser capaz de somar dois números negativos', function () {
        // coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(-15, -20);

        // compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(-35);
      });
});