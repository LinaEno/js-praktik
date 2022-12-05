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


const str = 'Де помити мопед';

const normalizeStr = str.toLowerCase().replaceAll(' ','');

const reverseStr = normalizeStr.split('').reverse().join('');



console.log(normalizeStr === reverseStr);