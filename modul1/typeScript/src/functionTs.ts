{
  function add(number1: number, number2: number = 10): number {
    return number1 + number2;
  }
  add(2, 2);
  const addarrow = (num1: number, num2: number): number => num1 + num2;
  //object ar modda kono function thakla taka bola method
  //object-->function--> method
  const poorUser = {
    name: "rezwan",
    balance: 0,
    addBalance(balance: number): string {
      return `my new balance : ${this.balance + balance} balance`;
    },
  };

  const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
  const newArry: number[] = arr.map(
    (element: number): number => element * element
  );
}
