class Printer {
  print(data) {
    let result = "date || credit || debit || balance";
    data.reverse().map((transaction) => {
      result += this._toString(transaction);
    });
    return result;
  }

  _toString(transaction) {
    const credit = this._format(transaction.credit);
    const debit = this._format(transaction.debit);
    const balance = this._format(transaction.balance);

    return `\n${transaction.date} || ${debit} || ${credit} || ${balance}`;
  }

  _format(number) {
    return typeof number === "number"
      ? parseFloat(number).toFixed(2)
      : (number = "");
  }
}

module.exports = Printer;
