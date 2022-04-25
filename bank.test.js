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
    expect(bank.getTransactions()).toEqual([500]);
  });

  it("withdraws", () => {
    bank.withdraw(200);
    expect(bank.getBalance()).toBe(300);
    expect(bank.getTransactions()).toEqual([500, -200]);
  });

  it('stores transactions')
});
