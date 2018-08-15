class transaction {
    calc(acVal, transVal) {
        
        let result = parseInt(acVal) + parseInt(transVal)

        if (transVal.toString().indexOf('-') !== -1) {
            return result - 500;
        }
        return result;
    }
}

module.exports = new transaction;     