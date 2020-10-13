// ! TASK 1-------------------------------
// Реализуйте класс Worker(Работник), который будет иметь следующие свойства: 
// name(имя), surname(фамилия), rate(ставка за день работы), days(количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение(умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }

//     getSalary() {
//         return this.rate * this.days
//     }
// }
// const worker = new Worker('James', 'Bond', 7000, 7)

// console.log(worker);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());
// !  как поставить $? 
// ?------------------------------------------------------


// ! TASK 2 -----------------------------------------------------
//? Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
//? а для их чтения сделайте методы - геттеры.Наш класс теперь будет работать так:

// class Worker {
//     constructor(name, surname, rate, days) {
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days;
//     }

//     get getName() {
//         return this._name
//     }
//     get getSurname() {
//         return this._surname
//     }
//     get getRate() {
//         return this._rate
//     }
//     get getDays() {
//         return this._days
//     }
//     get getSalary() {
//         return this._rate * this._days
//     }

// }
// const worker = new Worker('James', 'Bond', 7000, 7)

// console.log(worker.getName);
// console.log(worker.getSurname);
// console.log(worker.getRate);
// console.log(worker.getDays);
// console.log(worker.getSalary);
// ?--------------------------------------------------------------

// ! TASK 3 -----------------------------------------------------
//? Модифицируйте класс Worker из предыдущей задачи следующим образом:
//? для свойства rate и для свойства days сделайте еще и методы - сеттеры.
//? Наш класс теперь будет работать так:

// class Worker {
//     constructor(name, surname, rate, days) {
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days;
//     }
//     get getRate() {
//         return this._rate
//     }
//     get getDays() {
//         return this._days
//     }
//     set setRate(value) {
//         return this._rate = value
//     }
//     set setDays(value) {
//         return this._days = value
//     }
//     getSalary() {
//         return this._rate * this._days
//     }
// }

// const worker = new Worker('Johnny', 'Mnemonic', 550, 10);
// console.log(worker.getRate);
// console.log(worker.getDays);
// console.log(worker.getSalary());

// worker.setRate = 700;
// worker.setDays = 17

// console.log(worker.getSalary());


// ! TASK 2 -----------------------------------------------------
// Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде,
// метод ucFirst(), который параметром принимает строку, а возвращает эту же строку,
// сделав ее первую букву заглавной 
// и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
// Наш класс должен работать так:

class MyString {
    // constructor() {
    // }

    reverse(str) {

        return str.split("").reverse().join("")


        // let str = "aBBA";
        // let res = str.split("").reverse().join("");
        // console.log(res.toUpperCase() === str.toUpperCase());
    }
    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1)

    }
    ucWords(str) {
        let array = str.split(" ");
        let result = '';
        for (let el of array) {
            result += el[0].toUpperCase() + el.slice(1) + ' ';
        }
        return result
    }
}

const string = new MyString();
console.log(string.reverse('abcde')); //выведет 'edcba'
console.log(string.ucFirst('abcde')); //выведет 'Abcde'
console.log(string.ucWords('nif, naf, nuf')); //выведет 'Abcde Abcde Abcde'

// ?-------------------------------------------------------------

// ! TASK 5 -----------------------------------------------------



// let str = "Let's go out";
// let result = str.split('').reverse().join('');
//     console.log(result);










// ?-------------------------------------------------------------


// ! TASK 5 -----------------------------------------------------

// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Rabbit extends Animal {
//     constructor(name) {
//         super(name)
//         this.created = Date.now();
//     }
// }
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);
// ?-------------------------------------------------------------





// ?-------------------------------------------------------------