const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/contact_list_database');

const db=mongoose.connection;

db.on('error' ,console.error.bind(console,'error connecing to db'));

// up and running
db.once('open', function(){
    console.log('successfully connected to database');
});


module.exports = db;