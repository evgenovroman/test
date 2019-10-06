'use strict';

let money = +prompt("Ваш бюджет на месяц?" , ""),
    time  = +prompt("Введите дату в формате YYYY-MM-DD", "2019-12-30");
let appdata = {
    budget   : money,
    timeData : time,
    expenses : {
        firstAnswer  : +prompt("Введите обязательную статью расходов в этом месяце"),
        secondAnswer : +prompt("Во сколько это обойдется?")
    },
    optionalExpenses : {},
    income : [],
    savings : false
};

alert("Ваш бюджет на один день: " + Math.floor(money / 30));