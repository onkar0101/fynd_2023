var fs=require('fs');
var rs=fs.createReadStream('../demo2.txt');
rs.on('open',function(){
    console.log("the file is open");  //file is open

});
