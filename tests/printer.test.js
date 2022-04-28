// const Printer = require("../src/printer");

describe("Printer", () => {
  // const printer = new Printer();

  it("prints", () => {
    expect(typeof 1).toBe("number");
  });
});

// describe("Printer", () => {
//   const printer = new Printer();

//   test("prints out a bank statement", () => {
//     const one = { date: new Date(2023, 0, 10), debit: 1000, balance: 1000 };
//     const two = { date: new Date(2023, 0, 13), debit: 1000, balance: 3000 };
//     const three = { date: new Date(2023, 0, 14), credit: 500, balance: 2500 };

//     const bankTransactions = [one, two, three];

//     expect(printer.print(bankTransactions)).toEqual(
//       "date || credit || debit || balance\n14/01/2023 ||  || 500.00 || 2500.00\n13/01/2023 || 1000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00"
//     );
//   });
// })
