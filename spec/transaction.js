
const transaction = require('../bin/transaction.js');

var assert = require('assert');
describe('transacões bancarias', function () {

    it('Valida credito', function () {
        expect(transaction.calc(100,110,true)).to.equal(115);
    });

});