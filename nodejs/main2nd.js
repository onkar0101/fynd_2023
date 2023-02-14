var http=require('http');
var dt=require('./main.js');
//below line createe server and call  back function
http.createServer(function(req,res)
{
    //200:sucess code ,format:text/html,json.xml...
    res.writeHead(200,{'Content-type':'text/html'});
    //res:response to request
    //HEAD:code ibndicate sucess or failure
    //res.write("The date and time are currently: " + dt.getCurrentDate());
    res.write('server 2')
    res.end();
}).listen(8081);

