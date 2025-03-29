const students = [
    { name: "Alice", age: 22, grades: [85, 90, 88] },
    { name: "Bob", age: 19, grades: [70, 75, 80] },
    { name: "Charlie", age: 21, grades: [95, 92, 88] },
    { name: "David", age: 18, grades: [60, 65, 70] },
    { name: "Eve", age: 23, grades: [78, 82, 85] }
];


const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);


const studentsOlderThan20 = students.filter(student => student.age > 20);
console.log("Students older than 20:", studentsOlderThan20);


const totalGrades = students.reduce((sum, student) => sum + student.grades.reduce((a, b) => a + b, 0) / student.grades.length, 0);
const averageGradeAll = totalGrades / students.length;
console.log("Average grade of all students:", averageGradeAll.toFixed(2));


const averageGradeOlderThan20 = students
    .filter(student => student.age > 20)
    .map(student => student.grades.reduce((a, b) => a + b, 0) / student.grades.length)
    .reduce((sum, avg) => sum + avg, 0) / studentsOlderThan20.length;
    
console.log("Average grade of students older than 20:", averageGradeOlderThan20.toFixed(2));