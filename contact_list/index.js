const express = require('express');
const path = require('path'); // add this path for render
const port = 8000;


const app = express();

// app has multiple property in terms of x:y
app.set('view engine', 'ejs');

//now set the directory 
//app.set('views', ) // these line comment so we comment on line  also and add a new line on console.log(dirname) 

app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
//middleware1
//app.use(function(req,res,next)){
//    req.myName="Rohit";
//    console.log('middleware 1 called');
//    next();
//
//});

//middleare 2
//app.use(function(req,res,next){
//    console.log('My Nmae for MW2', req.myName);
//    console.log('middlewaare 2 called');
//    next();
//});

var contactList = [
    {
        name: "Rohit",
        phone: "1234567890"
    },
    {
        name: "Pushkar",
        phone: "1234056789"
    },
    {
        name: "ravi",
        phone: "2345678901"
    }
]

app.get('/', function (req, res) {
    // console.log(req);
    // console.log(__dirname);
    // res.send('<h1>Cool, it is runnig! or is it?</h1>')// remove this and write after
    //    return res.render('home', {title : "My Contacts List"});
    return res.render('home',
        {
            title: "My Contacts List",
            contact_list: contactList //after writting this go back to our home.ejs and write html file 
        });
})

app.get('/practice', function (req, res) {
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});
//when form should be submit some data which is coming here
//we can use post because written in form side is post so we will write post not get
// ./create-contact this is call in form action type in home.ejs file for posting 
// if we write action type other and in this file name different so they do not post 
app.post('/create-contact', function(req, res){
    //redirect means take me to that the url or browser or thake the redirect to the page
   return res.redirect('/practice');
    // return res.redirect('back');

});


//for deleting contact
// for deleting we use get request  and pass phone number
app.get('/delete-contact', function(req, res){
    //this function first find the contact
   // console.log(req.query);

   //get the query from the url
    let phone=req.query.phone;
    let contactIndex =  contactList.findIndex(contact => contact.phone == phone);// if mataching return 1 otherwise return -1

    if(contactIndex != -1){
        contactList.splice(contactIndex, 1);
    }

    return res.redirect('back');

    // 2nd thing is that  i want to find the index matching with contact number

});



app.listen(port, function (err) {
    if (err) { console.log('Error in running the server', err); }


    console.log('Yup! my server is running on port:', port);
});