function divideNumbers(i,j){
  
 if(j==0){
   throw new Error("Cannot divide by zero");
 }
 return i/j;
}


function divide(a,b){
    try{
       let result=divideNumbers(a,b);
       console.log(`Result: ${a} / ${b} = ${result}`);
    }catch(Error){
        console.log(`error}`);  
    }finally{
        console.log("compliter succcessfully");
    }
}

divide(10,5);
divide(20,0);
divide(20,5);
divide(50,10);
