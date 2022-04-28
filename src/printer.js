class Printer {
  print(statement) {
    let result = "date || credit || debit || balance";
    statement.reverse().map((transaction) => {
      result += this.#formatTransaction(transaction);
    });
    return result;
  }

  #formatTransaction(transaction) {
    const credit = this.#formatNumber(transaction.credit);
    const debit = this.#formatNumber(transaction.debit);
    const balance = this.#formatNumber(transaction.balance);
    const date = transaction.date.toLocaleDateString("en-UK");

    return `\n${date} || ${debit} || ${credit} || ${balance}`;
  }

  #formatNumber(number) {
    return typeof number === "number"
      ? parseFloat(number).toFixed(2)
      : (number = "");
  }
}

module.exports = Printer;
