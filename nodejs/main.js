var http=require('http');
var dt=require('./ownmodule2.js');
//below line createe server and call  back function
http.createServer(function(req,res)
{
    //200:sucess code ,format:text/html,json.xml...
    res.writeHead(200,{'Content-type':'text/html'});
    //res:response to request
    //res.write("The date and time are currently: " + dt.getCurrentTime());
    res.write('server 1')
    res.end();
}).listen(8080);

