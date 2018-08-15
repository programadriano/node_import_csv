
const transaction = require('../bin/transaction.js');

describe("Teste de transação bancaria", function () {

    it('valida credito na conta', function (done) {
        expect(transaction.calc(10, 100, true)).toMatch(500);      
        done();  
    });

});