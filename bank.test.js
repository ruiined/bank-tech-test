const Bank = require("./bank.js");

describe("Bank", () => {
  const bank = new Bank();

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
    const literallyJustDateNow = () => Date.now();
    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => 1530518207007);
    global.Date.now = dateNowStub;

    expect(literallyJustDateNow()).toBe(1530518207007);
    expect(dateNowStub).toHaveBeenCalled();

    global.Date.now = realDateNow;

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
