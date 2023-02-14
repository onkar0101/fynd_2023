var http=require('http');
var dt=require('./main2nd.js');// imfor the module to main js
//below line createe server and call  back function
http.createServer(function(req,res) //createServer is inbuilt method
{
    //200:sucess code ,format:text/html,json.xml...
    res.writeHead(200,{'Content-type':'text/html'});
    //res:response to request
    //HEAD:code ibndicate sucess or failure
    res.write("The date and time are currently: " + dt.getLocaleDate());
    res.write('server 3')
    res.end();
}).listen(8000);

