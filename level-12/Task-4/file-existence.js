const fs=require('fs');

const filename="output.txt";

if(fs.existsSync(filename)){
    console.log(`${filename} exists`);
}else{
    console.log(`${filename} not exists`);
    
}