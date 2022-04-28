const Bank = require("../src/bank");
const Printer = require("../src/printer");

const mockPrint = jest.fn();

jest.mock("../src/printer", () => {
  return jest.fn().mockImplementation(() => {
    return {
      print: mockPrint,
    };
  });
});

describe("Bank", () => {
  const bank = new Bank();
  const printer = new Printer();
  const date = "date";

  it("starts off with an empty balance and no transactions", () => {
    expect(bank.balance).toBe(0);
    expect(bank.transactions).toEqual([]);
  });

  it("deposits", () => {
    bank.makeTransaction(500);
    expect(bank.balance).toBe(500);
  });

  it("withdraws", () => {
    bank.makeTransaction(-200);
    expect(bank.balance).toBe(300);
  });

  it("stores the transactions with time and balance", () => {
    expect(bank.transactions).toEqual([
      {
        date: date,
        debit: 500,
        balance: 500,
      },
      {
        date: date,
        credit: 200,
        balance: 300,
      },
    ]);
  });

  it("prints the bank statement", () => {
    bank.printStatement();
    expect(printer.print).toHaveBeenCalledTimes(1);
  });
});

describe("Edge Cases", () => {
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

  it("throws an error when trying to withdraw more than what the balance is", () => {
    expect(() => {
      bank.makeTransaction(-30);
    }).toThrow("Insufficient balance");
  });
});
