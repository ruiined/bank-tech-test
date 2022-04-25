Printer = require("./printer.js");

describe("Printer", () => {
  const printer = new Printer();

  it("prints out a bank statement", () => {
    const one = { date: "10/01/2023", debit: 1000, balance: 1000 };
    const two = { date: "13/01/2023", debit: 1000, balance: 3000 };
    const three = { date: "14/01/2023", credit: 500, balance: 2500 };

    const bankData = [one, two, three];

    expect(printer.print(bankData)).toEqual(
      "date || credit || debit || balance\n14/01/2023 ||  || 500.00 || 2500.00\n13/01/2023 || 1000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00"
    );
  });
});
