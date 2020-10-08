// ! TASK 1------------------------------------------------------------
// Cоздайте ф-ю конструктор, ItemToSale принимающую параметрами (size, type, color)
//  и содержащую метод для ведения статистики продаж saveToSatatistics.

// let statistics = {
//     soldBag: 0,
//     soldDress: 0,
//     soldCoat: 0,
//     soldTotal: 0
// }
// const ItemToSale = function (size, type, color) {
//     this.size = size;
//     this.type = type;
//     this.color = color;
//     this.saveToStatistics = function () {

//         if (this.type === 'dress') {
//             statistics.soldDress++;
//             statistics.soldTotal++;
//         } else if (this.type === 'handbag') {
//             statistics.soldBag++;
//             statistics.soldTotal++;
//         } else if (this.type === 'coat') {
//             statistics.soldCoat++;
//             statistics.soldTotal++;
//         }
//     }
// }

// const item1 = new ItemToSale('S', 'dress', 'black')
// const item2 = new ItemToSale('', 'handbag', 'bloody-red')
// const item3 = new ItemToSale('Oversize', 'coat', 'brown')

// console.log(statistics);

// item1.saveToStatistics();
// console.log(statistics);
// item2.saveToStatistics();
// console.log(statistics);
// item2.saveToStatistics();
// item3.saveToStatistics();
// console.log(statistics);



// ! TASK 2------------------------------------------------------------
// Напишите ф - цию конструктор, которая будет создавать избирателя(name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
// статистики голосов и добавлять туда ключ(имя избирателя) и значение(имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

let statistics = 0;

const CreateVoter = function (name) {
    this.name = name;
    // this.presidentName = presidentName;

    this.vote = function (presidentName) {
    }
}

const voter1 = new CreateVoter('Max, student', 'Elon Musk')
const voter2 = new CreateVoter('Lisa, student', 'Borat')
const voter3 = new CreateVoter('Mark, student', 'Borat')
const voter4 = new CreateVoter('Ivan, taxpayer', 'Elon Musk')
const voter5 = new CreateVoter('Tanya, taxpayer', 'Elon Musk')
const voter6 = new CreateVoter('Zinaiida, retiree', 'Borat')
const voter7 = new CreateVoter('Grigorii retiree', 'Borat')


// console.log(statistics);
// console.log(voter1);
// console.log(voter2);
// console.log(voter3);
// console.log(voter4);
// console.log(voter5);
// console.log(voter6);
// console.log(voter7);
// console.log(statistics);

// ! TASK 3------------------------------------------------------------
// Создайте функцию - конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму введённых свойств.
//         mul() возвращает произведение введённых свойств.
//             Например:
// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());



const Calculator = function () {

    this.read = function () {
        this.number1 = +prompt('Enter your number 1');
        this.number2 = +prompt('Enter your number 2');

    };
    this.sum = function () {
        return this.number1 + this.number2;
    };

    this.mul = function () {

        return this.number1 * this.number2;
    };

}

let calculator = new Calculator();
calculator.read();
calculator.sum();

alert('Sum=' + calculator.sum())
alert('Mul=' + calculator.mul())


// ! TASK 4------------------------------------------------------------

// Напишите функцию - конструктор Accumulator(startingValue).
//     Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value.Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:
// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений


const Accumulator = function () {
    this.read = function () { }


}

let accumulator = new Accumulator(1);

// ! TASK 4------------------------------------------------------------
