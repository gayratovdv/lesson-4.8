const numbers = [ " boshlanishdagi array", 2, 4, 9, 10, 45, 67, 8, 90];

const evenNumbers = ["juft sonlarga ajratilgan array"];

for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

console.log(numbers);
console.log(evenNumbers);