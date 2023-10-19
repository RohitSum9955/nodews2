// require the library
const mongoose = require('mongoose');

// connect to the database
// mongoose.connect('mongodb://localhost:27017/contact_list_db');
/*await mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');

//acquire the  connection (to check if it is successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, 'error connecting to db'));

//up and running then print the message
db.once('open', function() {
    console.log('Successfully connected to the database');
});*/
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');
  console.log('successfully connected to db');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// module.exports=main;
