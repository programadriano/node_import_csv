var csv = require("fast-csv");
const ObjectsToCsv = require('objects-to-csv');
const account = require('./bin/account.js');


const contapath = process.argv.slice(2)[0];
const transacaopath = process.argv.slice(2)[1];

var accounts = [];
var transactions = [];

async function printCsv(data) {
    console.log(
        await new ObjectsToCsv(data).toString()
    );
}

csv
    .fromPath(contapath)
    .on("data", function (data) {
        if (data[0] != 'null' && data[1] != 'null') {
            accounts.push(new account(data[0], data[1]));
        }


    })
    .on("end", function () {
        csv
            .fromPath(transacaopath)
            .on("data", function (data) {
                if (data[0] != 'null' && data[1] != 'null') {
                    transactions.push(new account(data[0], data[1]));
                }
            })
            .on("end", function () {

                for (var index = 0; index < transactions.length; index++) {
                    let ac = accounts.find(o => o.account === transactions[index].account);
                    if (ac != null) {
                        if ((parseInt(ac.balance) + parseInt(transactions[index].balance)) < 0) {
                            ac.balance = parseInt(ac.balance) + parseInt(transactions[index].balance) - 5;
                        } else if (ac.account == transactions[index].account) {
                            ac.balance = parseInt(ac.balance) + parseInt(transactions[index].balance);
                        }
                    }

                };

                printCsv(accounts);
            });

    });







