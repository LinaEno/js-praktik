// МАСИВИ ТА ФУНКЦІЇ

// // ЗАДАЧКА 1

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// // console.log(numbers.reverse());

// for (let i = 0; i < numbers.length/2; i += 1) {

//     // console.log(numbers[numbers.length-1-i]);

//     let temp = numbers[i];

//     numbers[i] = numbers[numbers.length - 1 - i];

//     numbers[numbers.length - 1 - i] = temp;

// }

// console.log(numbers);



// ЗАДАЧКА 2
/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "rock'n'roll" до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте "Country" та "Reggy" на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// genres.push("Rock'n'roll");

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

//console.log(genres.shift());
//console.log(genres.splice(0, 0, 'Pop'));

// console.log(genres.unshift("Country", "Reggy"));
// console.log(genres);











// ЗАДАЧКА 3
/*
? Напиши скрипт пошуку найдовшого слова в масиві.
? Код має працювати для будь-якого масиву рядків.
? Використовуйте цикл для вирішення задачі.
*/
// const genres = ['Jazz', 'Blues', "rock'n'roll", 'Country', 'Reggy'];
// let longestWord = genres[0];
// for(const genre of genres){
// //console.log(genre.length);
// if(genre.length>longestWord.length){
// longestWord=genre;
// }
// }
// console.log(longestWord);



// ЗАДАЧКА 4


// /Напишіть код який визначає наявність кольору у масиві
//якщо колір є, встановлює його як фон документа
//якщо кольору немає виводить console.error('Такий колір не знайдено');
//і встановлює колір документа червоний
// document.body.style.background = 'red';
const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']
const randomColor = 'blue';
if (colors.includes(randomColor)) {
  document.body.style.background = randomColor;
} else {
  console.error('Такий колір не знайдено');
  document.body.style.background = 'red';
}














// ЗАДАЧКА 5
// ЗАДАЧКА 6
// ЗАДАЧКА 7
// ЗАДАЧКА 8
// ЗАДАЧКА 9
// ЗАДАЧКА 10
// ЗАДАЧКА 11
// ЗАДАЧКА 12
