let foodlist=["dhosa","pongal","ideli","apam","sambar"];
console.log("foodlist in inital stage:",foodlist);
foodlist.push("curd rice");
console.log("After add a iterm in end  :",foodlist);
foodlist.shift();
console.log("After delete a first item in a food list  :",foodlist);
let arraylength=foodlist.length;
console.log("length of the array  :",arraylength);
let indexof=foodlist.indexOf("apam");
console.log("index of apam in array:",indexof);
let slicefood=foodlist.slice(1,3);
console.log("one to three index foods in array:",slicefood);



