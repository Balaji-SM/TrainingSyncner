
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const squaredNumbers = numbers.map(num => num ** 2);
console.log("Squared Numbers:", squaredNumbers);


const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);


const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);


console.log("Number and Square Root:");
numbers.forEach(num => {
    console.log(`Number: ${num}, Square Root: ${Math.sqrt(num).toFixed(2)}`);
});

