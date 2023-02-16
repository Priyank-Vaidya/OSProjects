const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.PORT,
    database: 'osproject',
    user: process.env.USER,
    password: process.env.PASSWORD
});

connection.connect(async(req,res, err)=>{
    if(err){
       res.send(err);
    }
    else{
        console.log("Connection Successful");
    
    }
})