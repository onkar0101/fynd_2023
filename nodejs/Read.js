const fs=require("fs");
//how to write a callback function
// and it minimise the exception handling 
//fs: file stream
function readUTF8File(filePath)
{
    fs.readFile(filePath,"utf-8", (data,error)=>{
        if(error)
        {
            console.error(error);
            return;
        }
        console.log(data);
    });
}
//readUTF8File("../demo2.txt");
//UTF:Unicode Transformation format
readUTF8File("./hello.txt");
