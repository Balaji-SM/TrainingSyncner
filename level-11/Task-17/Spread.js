var array1=[
    {student1:"balaji"},
    {student2:"adhithiya"},
    {student3:"swathi"},
    {student4:"swetha"},
    {student5:"nisha"},
    {student6:"harish"},
];
var array2=[
    {mark_stu1:450},
    {mark_stu1:350},
    {mark_stu1:480},
    {mark_stu1:4590},
    {mark_stu1:420},
    {mark_stu1:390},
];

const combinedarray=[...array1,...array2] ;
console.log(combinedarray);

const obj1={name:"balaji",mark:24,dept:"IT"};
const obj2={name:"adhithiya",mark:21,dept:"IT"};

const combinedobj=[{...obj1},{...obj2}];

console.log(combinedobj);
