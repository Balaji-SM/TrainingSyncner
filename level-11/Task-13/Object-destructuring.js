const product={name:"lapotop",
    price:57000,
    category:"i5-12thgen-512ssd"
    ,instock:"true"
};

const {name,price,category,instock}=product;
console.log("destruectured values");

console.log("name:",name);
console.log("price:",price);
console.log("category:",category);
console.log("instock",instock);

function bala({name,price,category,instock}){
  
return `hello!! the produect details name : ${name}\n price:${price}\n category:${category}\n instock:${instock ? "yes":"No"}`;
}

const callfun=bala(product);
console.log(callfun,":result");