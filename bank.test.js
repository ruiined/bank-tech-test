const Bank = require("./bank.js");

describe("Bank", () => {
  const bank = new Bank();

  jest
    .useFakeTimers()
    .setSystemTime(new Date("30/12/2030").toLocaleDateString("en-UK"));

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
      { date: "30/12/2030", debit: 500, balance: 500 },
      { date: "30/12/2030", credit: 200, balance: 300 },
    ]);
  });
});

// describe("Edge cases", () => {
//   const bank = new Bank()

//   it("only takes integers as an amount", () => {

//   })

//   it("doesn't record 0 as a valid transaction", () => {

//   })

//   it("throws an error when trying to withdraw more than what the balance allows", () => {

//   })
// })
