'use strict';


var nowDate = new Date();
let money = prompt("Ваш бюджет на месяц?" , "");
    while (money === null || money.length == 0 || money.length > 10) {
        alert("Вы не ввели свой бюджет на месяц или ввели слишком большое число");
        money = prompt("Ваш бюджет на месяц?" , "");
    };
    parseInt(money);
let time  = prompt("Введите дату в формате YYYY-MM-DD", nowDate),
    appData = {
    budget   : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};


for (let i = 0; i < 2; i++) {
    let firstAnswer  = prompt("Введите обязательную статью расходов в этом месяце" , ""),
        secondAnswer = prompt("Во сколько обойдется?" , "");


        if (firstAnswer != null && secondAnswer != null && firstAnswer.length > 0 && secondAnswer.length > 0){
            alert("done");
        }
        else {
            while (firstAnswer === null || secondAnswer === null || firstAnswer.length == 0 || secondAnswer.length == 0 || firstAnswer.length > 10) {
                alert("Вы ничего не ввели или ввели слишком большое число"); 
                firstAnswer  = prompt("Введите обязательную статью расходов в этом месяце" , ""),
                secondAnswer = prompt("Во сколько обойдется?" , "");   
            };
        };
    appData.expenses[firstAnswer] = secondAnswer;
};

alert("Ваш бюджет на один день: " + Math.floor(money / 30));

console.log(appData);