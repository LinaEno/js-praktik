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

// const str = "я вчу javascript!";
// console.log(str.length);

// console.log(str.slice(2, 5));
// const index = str.indexOf("javascript");

// console.log(str.slice(index, str.length - 1));
// Напишіть код, який повертає рядок str з першим символом у верхньому регістрі,

// let str = 'javascript';

// const newStr = str[0].toUpperCase() + str.slice(1);

// const newStr = `${str[0].toUpperCase()}${str.slice(1)}`
// console.log (newStr);

// Напишіть код який перевіряє довжину str і, якщо вона перевищує maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength.

// "Що я хотів би розповісти на цю тему:"
// let newStr = '';
// const str = "Що я хотів би розповісти на цю тему:";
// const maxLength = 20;
// if (str.length > maxLength) {
//     newStr = str.slice(0, maxLength - 1) + '…';
// } else {
//     newStr = str;
// }
// console.log(newStr);

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// const max = 50;
// const min = 23;
// let sum = 0;
// for (let i = max; i >= min; i -=1) {
//     // console.log(i);
//     if (i % 2 !== 0) {
//         continue
//     }
//     sum += i
// }
// console.log(sum);

// Напишіть код, який запитуватиме
//Логін за допомогою prompt і логуватиме результат
//В консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// / / В іншому випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Здрастуйте!"

// const userLogin = prompt("Введіть login");
// // let userPassward;
// if (userLogin === "Адмін") {
// 	const userPassward = prompt("Введіть passward");
// 	if (userPassward === "я головний") {
// 		console.log("Здрастуйте!");
// 	} else if (userPassward === null) {
// 		console.log("Скасовано");
// 	} else {
// 		console.log("Невірний пароль");
// 	}
// } else if (userLogin === null) {
// 	console.log("Скасовано");
// } else {
// 	console.log("Я вас не знаю");
// }


// const userLogin = prompt("Введіть login");
// switch (userLogin) {
// 	case "Адмін":
// 		const userPassward = prompt("Введіть passward");
// 		console.log(userPassward);
// 		switch (userPassward) {
// 			case "я головний":
// 				console.log("Здрастуйте!");
// 				break;
// 			case null:
// 				console.log("Скасовано");
// 				break;
// 			default: 
// 				console.log("Невірний пароль");
// 		}
// 		break;
// 	case null:
// 		console.log("Скасовано");
// 		break;
// 	default:
// 		console.log("Я вас не знаю");

// }
// При завантаженні сторінки користувачеві пропонується
//В prompt ввести число. Введення додається до значення
//Змінної total.
//Операція введення числа триває до того часу,
//Поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів не потрібно.

// let userNumber = prompt("Введіть число");
// let total=0;
// // while (userNumber){
// // 	total += Number(userNumber);
// // 	userNumber = prompt("Введіть число");
// // }
// do {
// 	total += Number(userNumber);
// 	userNumber = prompt("Введіть число");
// } while (userNumber)
// console.log(total);


