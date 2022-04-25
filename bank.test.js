const Bank = require("./bank.js");

describe("Bank", () => {
  const bank = new Bank();
  const dateToday = new Date().toLocaleDateString("en-UK");

  it("starts off with an empty balance and no transactions", () => {
    expect(bank.getBalance()).toBe(0);
    expect(bank.getTransactions()).toEqual([]);
  });

  it("deposits", () => {
    bank.makeTransaction(500);
    expect(bank.getBalance()).toBe(500);
  });

  it("withdraws", () => {
    bank.makeTransaction(-200);
    expect(bank.getBalance()).toBe(300);
  });

  it("stores the transactions with time and balance", () => {
    expect(bank.getTransactions()).toEqual([
      {
        date: dateToday,
        debit: 500,
        balance: 500,
      },
      {
        date: dateToday,
        credit: 200,
        balance: 300,
      },
    ]);
  });
});

describe("Edge cases", () => {
  const bank = new Bank();
  const amountError = "Invalid amount entered";

  it("only takes positive or negative integers as an amount", () => {
    expect(() => {
      bank.makeTransaction(0);
    }).toThrow(amountError);
    expect(() => {
      bank.makeTransaction("String");
    }).toThrow(amountError);
    expect(() => {
      bank.makeTransaction({ Object });
    }).toThrow(amountError);
    expect(() => {
      bank.makeTransaction();
    }).toThrow(amountError);
    expect(() => {
      bank.makeTransaction(true);
    }).toThrow(amountError);
  });

  it("throws an error when trying to withdraw more than what the balance allows", () => {
    expect(() => {
      bank.makeTransaction(-30);
    }).toThrow("Insufficient balance");
  });
});
