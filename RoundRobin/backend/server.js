const mysql = require('mysql');
const express= require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const route = require('./route');


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/v1', route);

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err)=>{
    if(err){
        console.log(err)
    }else{
        app.listen(process.env.PORT, ()=>{
            console.log("Server Running at port 5000");
        })
    }
}
)
