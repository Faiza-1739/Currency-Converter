#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.56,
    PKR: 280
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    }
]);
let userFromCurrency = userAnswer.from;
let userToCurrency = userAnswer.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
