const Printer = require("./printer");

class Bank {
  constructor(printer = new Printer()) {
    this.printer = printer;
    this.transactions = [];
  }

  makeTransaction(amount) {
    this.#checkForErrors(amount);
    const type = amount > 0 ? "debit" : "credit";
    this.#processTransaction(type, amount);
  }

  printStatement() {
    console.log(this.printer.print(this.transactions));
  }

  #processTransaction(type, amount) {
    this.transactions.push({
      date: new Date(),
      [type]: Math.abs(amount),
      balance: this.#calculateBalance(amount),
    });
  }

  #calculateBalance(amount) {
    if (this.transactions.length === 0) return amount;
    return this.transactions[this.transactions.length - 1].balance + amount;
  }

  #checkForErrors(amount) {
    if (!Number.isInteger(amount) || amount === 0)
      throw "Invalid amount entered";
    if (amount < 0 && this.#calculateBalance(amount) < -amount)
      throw "Insufficient balance";
  }
}

module.exports = Bank;
