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
    this.transactions.push(money);
    this.balance += money;
  }

  withdraw(money) {
    this.transactions.push(-money);
    this.balance -= money;
  }

  // printStatement() {
  //   this.transactions.push({ debit: "debit", balance: "balance" });
  //   return this.transactions.map((tran) => tran);
  // }
}

module.exports = Bank;
