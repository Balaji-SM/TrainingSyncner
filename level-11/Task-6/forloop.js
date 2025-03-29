let i=1;
let r=0;
for(i=1;i<=10;i++){
    console.log("one to ten num :",i); 
}
for(j=1;j<=10;j++){
    let k=j%2;
    if(k==0){
        console.log("even numbers",j);
       r=r+j;
       
    }
}
console.log("the sum of the even num is :",r);