const express = require('express');
const path = require('path'); // add this path for render
const port = 8000;


const app = express();

// app has multiple property in terms of x:y
app.set('view engine', 'ejs');

//now set the directory 
//app.set('views', ) // these line comment so we comment on line  also and add a new line on console.log(dirname) 

app.set('views', path.join(__dirname, 'views')); 

app.get('/', function(req, res){
    // console.log(req);
   // console.log(__dirname);
   // res.send('<h1>Cool, it is runnig! or is it?</h1>')// remove this and write after
   return res.render('home', {title : "My Contacts List"});
});

app.get('/practice', function(req,res){
    return res.render('practice',{
        title: "Let us play with ejs"
    });
});




app.listen(port, function(err){
    if(err){console.log('Error in running the server', err);}


    console.log('Yup! my server is running on port:',port);
});