class transaction {
    calc(acVal, transVal, isdebit) {
        let result = parseInt(acVal) + parseInt(transVal)

        if (isdebit === true) {
          return  result - 500;           
        }
        return result;
    }
}

module.exports = new transaction;     