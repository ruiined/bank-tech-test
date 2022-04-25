# Bank Tech Test

## Overview

[![Tests](https://github.com/ruiined/bank-tech-test/actions/workflows/main.yml/badge.svg)](https://github.com/ruiined/bank-tech-test/actions/workflows/main.yml)

<!-- ~ Codecov Badge ~ -->

<!-- ~ Dependencies ~ -->

## Instructions

#### How to Install

- Clone this repository & `cd` into it
- `npm install`

#### How to Test

- `npm test` - unit tests & coverage

#### How to Run

- `node bank.js` to enter REPL
- `const myBank = new Bank()` to create a new bank account
- `makeTransaction(amount)`
  - it's a deposit if the amount is positive
  - it's a withdrawal if the amount is negative
  - it's going to throw an error in all the other cases
- `getBalance()` to get a current balance figure
- `printStatement()` to print an up-to-date bank statement

## Functionality

- Deposits
- Withdrawal
- Account statement (date, amount, balance) printing

## Coding process

Following the TDD process, I started with writing basic tests, and passing them as I go. Once the basic functionality was written & tested, I refactored it to be less repetitive and more efficient instead.

My next step was adding the edge cases. I wrote all the tests that came to my mind (invalid amount entered, withdrawing more than what the balance permits, etc.) and moved on to implementing it.

Once the bank was functioning as desired, it was time to create a statement printer, following the [task](https://github.com/makersacademy/course/blob/main/individual_challenges/bank_tech_test.md)'s requirements:

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

The test was simply checking for the output above to be executed upon printing those exact three transactions.

The statement printer was injected into a bank class with a flexibility to use another printer, if needed. That made it easy to isolate the printer in the bank test using the doubles.

As a result, the testing was thorough but short & simple. The tests are passing and the coverage is at 100%.