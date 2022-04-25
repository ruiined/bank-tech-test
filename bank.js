class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactions;
  }

  deposit(money) {
    this.balance += money;
    this.transactions.push({
      date: new Date().toLocaleDateString("en-UK"),
      debit: money,
      balance: this.balance,
    });
  }

  withdraw(money) {
    this.balance -= money;
    this.transactions.push({
      date: new Date().toLocaleDateString("en-UK"),
      credit: money,
      balance: this.balance,
    });
  }
}

module.exports = Bank;
