{
  //access mofefiers
  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number;
    // private _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDepo(amount: number) {
      this._balance = this._balance + amount;
      console.log(this._balance);
    }
  }
  //   class Student extends BankAccount{
  //     test(){
  //         this._balance
  //     }
  //   }
  const poorAccount = new BankAccount(111, "rezwan", 12);
  poorAccount.addDepo(300);
}
