let person={name:"balaji",
    age:24,
    city:"coimbatore",
    hobbies:["codeing","dancing","singing","drawing"]
}
   
console.log("name:",person.name);
console.log("age:",person.age);
console.log("city:",person.city);
console.log("hobbies:",person.hobbies);

person.job="software developer";
console.log("after added a job prop:",person.job);

person.age=27;
console.log("updated age:",person.age);


person.greeting=function(){
    return `hello,my name is ${this.name} and i am ${this.age}. iam coming from ${this.location}.i am hobbies is${this.hobbies}`;
}

console.log( person.greeting());
