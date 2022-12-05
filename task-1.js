// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'abcde';

// // if (str.startsWith('b')) {
// //     console.log('так');
// // }
// // else { console.log('ні') };

// if (str[0] === 'a') {
//     console.log('так');
// }
// else {
//     console.log('ні')
// };

// const str = 'Де помити мопед';

// const normalizeStr = str.toLowerCase().replaceAll(' ','');

// const reverseStr = normalizeStr.split('').reverse().join('');

//console.log(normalizeStr === reverseStr);

//console.log(true && 3);
//console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
//console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) >= 0);
//  console.log(null > 0); //false
//  console.log(null === 0); //false
//  console.log(null >= 0); //true
// Дано рядок 'я вчу javascript!'. Знайдіть кількість символів у цьому рядку.

const str = "я вчу javascript!";
console.log(str.length);

console.log(str.slice(2, 5));
const index = str.indexOf("javascript");

console.log(str.slice(index, str.length - 1));
