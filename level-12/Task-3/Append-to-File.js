const fs=require('fs');

const data ="\n i am comig from thanjavur"

const filePath="output.txt";

fs.appendFile(filePath,data,(err)=>{
    if(err){
    console.error('Error appending data ti file:',err);
} else{
    console.log("data appended ti file successfully");
    
}
});