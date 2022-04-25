Bank = require("./bank.js");

describe("Bank", () => {
  bank = new Bank();

  it("starts off with an empty balance and no transactions", () => {
    expect(bank.getBalance()).toBe(0);
    expect(bank.getTransactions()).toEqual([]);
  });

  it("deposits", () => {
    bank.deposit(500);
    expect(bank.getBalance()).toBe(500);
  });

  it("withdraws", () => {
    bank.withdraw(200);
    expect(bank.getBalance()).toBe(300);
  });

  it("stores the transactions with time and balance", () => {
    expect(bank.getTransactions()).toEqual([
      { date: "25/04/2022", debit: 500, balance: 500 },
      { date: "25/04/2022", credit: 200, balance: 300 },
    ]);
  });
});
