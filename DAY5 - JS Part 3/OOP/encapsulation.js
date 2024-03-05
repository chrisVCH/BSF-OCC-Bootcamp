// Encapsulation

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log(`Insufficient balance!`);
    }
  }

  getAccountInfo() {
    return `Your account number is ${this.accountNumber}, your balance is ${this.balance}`;
  }
}

const myAccount = new BankAccount('12345', 1000);
const regelAccount = new BankAccount('99988', 6000);