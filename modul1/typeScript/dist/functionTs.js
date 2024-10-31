"use strict";
{
    function add(number1, number2 = 10) {
        return number1 + number2;
    }
    add(2, 2);
    const addarrow = (num1, num2) => num1 + num2;
    //object ar modda kono function thakla taka bola method
    //object-->function--> method
    const poorUser = {
        name: "rezwan",
        balance: 0,
        addBalance(balance) {
            return `my new balance : ${this.balance + balance} balance`;
        },
    };
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const newArry = arr.map((element) => element * element);
}
