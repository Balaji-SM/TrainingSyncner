var firstname="Balaji";
var lastname="krrish";
let age=21;
 
const template= `hello i am ${firstname} ${lastname} and now i am in ${age}`;
 console.log(template);
 
 const multiLineMessage = `
This is a multi-line string.
In 5 years, I will be ${age + 5} years old.
`;

console.log(multiLineMessage);

const ageMessage = `I am ${age >= 18 ? "an adult" : "a minor"}.`;

console.log(ageMessage);