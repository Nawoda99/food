require ('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts')
const controller = require('./controller/userController');
const connectdb = require('./config/db');

const app = express();
const port = 5000 || process.env.PORT;


connectdb();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());



app.use(express.static('public'));



app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('login');
});
app.get('/register',(req,res)=>{
    res.render('register');
});

app.post('/register',controller.postUser);

app.post('/home',controller.home);
app.get('/home',controller.homepage);


app.listen(port,()=>{
    console.log(`app listeing on port ${port}`)
});