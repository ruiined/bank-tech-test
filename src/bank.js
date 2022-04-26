const Printer = require("./printer");

class Bank {
  constructor(printer = new Printer()) {
    this.printer = printer;
    this.balance = 0;
    this.transactions = [];
  }

  makeTransaction(amount) {
    this._checkForErrors(amount);
    const type = amount > 0 ? "debit" : "credit";
    this.balance += amount;
    this._processTransaction(type, amount);
  }

  printStatement() {
    console.log(this.printer.print(this.transactions));
  }

  _processTransaction(type, amount) {
    this.transactions.push({
      date: new Date().toLocaleDateString("en-UK"),
      [`${type}`]: Math.abs(amount),
      balance: this.balance,
    });
  }

  _checkForErrors(amount) {
    if (!Number.isInteger(amount) || amount === 0)
      throw "Invalid amount entered";
    if (amount < 0 && this.balance < -amount) throw "Insufficient balance";
  }
}

module.exports = Bank;
