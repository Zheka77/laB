let randomNumber = Math.random();
console.log("Random Number:", randomNumber);

// 2. Створити змінні базових типів, виведіть їх на екран.
let num = 42;
let str = "Hello, World!";
let bool = true;
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);

// 3. Збережіть суму двох чисел і збережіть її у третю змінну, виведіть її на екран.
let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum:", sum);

// 4. Створіть файл script.js. Підключіть його в нижню частину файлу index.html. створіть три діалогових вікна з alert(), prompt(), confirm().
// Виконати безпосередньо у браузері:
// Вставте це в HTML файл:
// <script src="script.js"></script>
alert("This is an alert!");
let name = prompt("What is your name?");
let isConfirmed = confirm("Do you confirm?");

// 5. Запитайте у користувача його вік. Виведіть фразу “Ваш вік ____”
let age = prompt("Скільки вам років?");
alert(`Ваш вік ${age}`);

// 6. Ввести кількість купленого товару, ціну за одиницю. Виведіть суму покупки.
let quantity = prompt("Введіть кількість купленого товару:");
let pricePerUnit = prompt("Введіть ціну за одиницю:");
let totalPrice = quantity * pricePerUnit;
alert(`Сума покупки: ${totalPrice}`);

// 7. Введіть число – визначте чи воно від’ємне.
let number = prompt("Введіть число:");
if (number < 0) {
    alert("Число від’ємне");
} else {
    alert("Число невід’ємне");
}

// 8. Введіть номер дня тижня, виведіть його назву.
let dayNumber = prompt("Введіть номер дня тижня (1-7):");
let daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
alert(`День тижня: ${daysOfWeek[dayNumber % 7]}`);

// 9. Виведіть таблицю множення числа 6.
for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i} = ${6 * i}`);
}

// 10. Задайте одномірний масив n=5. Виведіть квадрат третього числа, суму першого і останнього елемента, суму квадратів від’ємних елементів.
let arr = [2, -3, 5, -7, 4];
console.log("Квадрат третього числа:", arr[2] ** 2);
console.log("Сума першого і останнього елемента:", arr[0] + arr[arr.length - 1]);
let sumOfSquares = arr.filter(x => x < 0).reduce((acc, val) => acc + val ** 2, 0);
console.log("Сума квадратів від’ємних елементів:", sumOfSquares);

// 11. Створіть об’єкт машина. Поля: ім’я власника, назва моделі, об’єм двигуна. Створіть масив з кількома об’єктами, виведіть машину з мінімальним об’ємом двигуна.
let cars = [
    { owner: "John", model: "Toyota", engine: 1.8 },
    { owner: "Jane", model: "Honda", engine: 1.6 },
    { owner: "Doe", model: "Ford", engine: 2.0 }
];
let minEngineCar = cars.reduce((prev, curr) => (prev.engine < curr.engine ? prev : curr));
console.log("Машина з мінімальним об’ємом двигуна:", minEngineCar);

// 12. Введіть 4 числа, Знайти max{min(a, b), min(c, d)}
let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let num3 = prompt("Введіть третє число:");
let num4 = prompt("Введіть четверте число:");
let result = Math.max(Math.min(num1, num2), Math.min(num3, num4));
console.log("Результат:", result);

// 13. Задайте слово, виведіть його довжину та запишіть його в зворотному порядку.
let word = prompt("Введіть слово:");
console.log("Довжина слова:", word.length);
console.log("Слово у зворотному порядку:", word.split('').reverse().join(''));