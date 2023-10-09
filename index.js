const http = require("http");

const port = 8000;
//fs is used to read and write files
const fs = require('fs');

//create a request handler for request and response
function requestHandler(req, res){
    console.log(req.url);
    //now add next line to the next page by creating html file
    res.writeHead(200, {'content-type': 'text/html'});
   // res.end('<h1>Rohit!</h1>');
  /* fs.readFile('./index.html', function(err, data){//for rading and writing pass th file path 
       //cath the error
       if(err){
        console.log('error',err);
        return res.end('<h1>Error!</h1>');

       }
       return res.end(data);
   });*/
   let filePath;
   switch(req.url){
       case '/':
            filePath = './index.html'
            break;
       case '/profile':
             filePath = './profile.html'
             break;
       default:
             filePath = './404.html'
   }
   fs.readFile(filePath, function(err, data){
       if(err){
        console.log('error', err);
        return res.end('<h1>Error!</h1>');
       }

       return res.end(data);
   })

}


//pass the argument of function to the server
const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    //console.log("Server is up and running on port:", port);
    console.log("Server is running on prot:", port);
});