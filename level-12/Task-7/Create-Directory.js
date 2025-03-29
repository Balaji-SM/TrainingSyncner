const fs=require('fs');

const directry="dir-creation";


if(!fs.existsSync(directry)){
  fs.mkdir(directry,(err)=>{
  if(err){
    console.error(` error creating a directoy:`,err);
  }else{
    console.log(`${directry} was created  successfully`);
  }
});

}else{
    console.log(`directory ${directry}is already exits`);
    
}