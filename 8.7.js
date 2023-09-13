// Для более удобной проверки отдельных заданий вывод значений в конце, закомментирован

// Задание 8.7.1

function PrintInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: "Олег",
    age: 28,
}

//PrintInfo.call(person);


// Задание 8.7.2

function calculate(a, b, operator) {
    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Неверный оператор");
            break;
    }

    console.log(result)

}

//calculate.apply(this.calculate,[6, 3, "+"])


// Задание 8.7.3

let users = [
    { name: "Олег", age: 29 },
    { name: "Виталина", age: 17 },
    { name: "Антон", age: 32 },
    { name: "Андрей", age: 14 },
    { name: "Наталья", age: 19 }
];
const AdultUsers = users.filter(function (user) {
    return user.age >= 18;
});

const namesOnly = AdultUsers.map(function (user) {
    return user.name;
});

// console.log(AdultUsers);
// console.log(namesOnly);


// Задание 8.7.4

function setFullName(fullName) {
    this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

// console.log(person.fullName);
// console.log(person)


// Задание 8.7.5

function GetUniqNumbers(nubmers) {
    const uniqNumbers = [];
    for (i = 0; i < nubmers.length; i++) {
        if (uniqNumbers.indexOf(nubmers[i]) === -1) {
            uniqNumbers.push(nubmers[i])
        }
    }
    uniqNumbers.sort(function (a, b) {
        return a - b;
    });
    return uniqNumbers;
}

