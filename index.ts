#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 50000; //dollar
let mypin = 12750;
console.log(chalk.magenta("Welcome to ATM Machine"))
const languageans  = await inquirer.prompt([
    {
        name : "language",
        message : "select the language :",
        type : "list",
        choices :[chalk.yellow('English'),('Urdu')],
    },
]);
if (languageans.language === languageans) {
    console.log(chalk.yellow('select the language :'))
}    
    const pinans = await inquirer.prompt([
        {
            name : "number",
            message : (chalk.grey('Enter your pin :')),
            type : "pin",
}
    ]);
    if (pinans.pin === mypin){
        console.log(chalk.red('incorrect pin !'))
    }
    else {
        console.log(chalk.greenBright('successfully login !'))
    
while(true){
    let operation = await inquirer.prompt([
     {
        name : "selectoperator",
        message : (chalk.grey("what you want to do ?")),
        type : "list",
        choices :['withdraw','currentBalance','fast cash','fund transfer','exit']

     }
    ]);
    if (operation.selectoperator === ("withdraw")) {
        const amount = await inquirer.prompt([
            {
                name : "enteramount",
                message : (chalk.grey("enteramount you want to withdraw :")),
                type : "number",
            }
        ]);
        let remaining = myBalance - amount.enteramount
        if (amount.enteramount > myBalance) {
            console.log(chalk.red('insufficient Balance')); 
        
        }else if (amount.enteramount <= myBalance) {
            console.log(chalk.greenBright(`withdraw successfull ! your remaining Balance is : ${remaining}`));
    }else {
            console.log(chalk.red('invalid number'));
    }
    }else if (operation.selectoperator === ("currentBalance")) {
        console.log(chalk.magenta(`your currentBalance is : ${myBalance}`));
    }else if(operation.selectoperator === ("fast cash")) {
        const fastamount = await inquirer.prompt([
            {
                name : "amount",
                message : (chalk.grey("select fast cash amount ?")),
                type : "list",
                choices : [5000,10000,15000,20000]
            }
        ]);
        let withdrawamount = fastamount.amount
        if(withdrawamount <= myBalance) {
            myBalance -= withdrawamount;
            console.log(chalk.greenBright(`fast cash withdrawal of ${withdrawamount} successfull ! your remaining Balance is :${myBalance}`));
        }else{
            console.log(chalk.red("insufficient Balance for fast cash withdrawal !"));
        };
    }else if(operation.selectoperator === ("fund transfer")) {
        const fundamount = await inquirer.prompt([
            {
                name : "amount",
                message : (chalk.grey("select fund transfer amount ?")),
                type : "list",
                choices : [10000,20000,30000,50000]
            }
        ]);
        let transferamount = fundamount.amount
        if(transferamount <= myBalance) {
            myBalance -= transferamount;
            console.log(chalk.greenBright(`fund transfer withdrawal of ${transferamount} successfull ! your remaining Balance is : ${myBalance}`));
        }else {
            console.log(chalk.red("insufficient Balance for fund transfer !"));
        }
    }else {
        console.log(chalk.yellow("Thank you for using ATM !"));
        break
    };
}

    }