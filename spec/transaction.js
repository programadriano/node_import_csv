
var expect = require("chai").expect;
const transaction = require('../bin/transaction.js');

var assert = require('assert');
describe('transacões bancarias', function () {

    it('Valida crédito', function () {
        expect(transaction.calc(100, 100, false)).to.equal(200);
    });

    it('Valida débito', function () {
        expect(transaction.calc(1000, 1500, true)).to.equal(2000);
    });

});