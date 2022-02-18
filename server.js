const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')


const app = express();

dotenv.config({path:'config.env'});
// require('dotenv').config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan('tiny'));

//mongo DB connection
connectDB();

app.use(bodyparser.urlencoded({extended:true}));

//set view Engine
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"views/ejs"));


//laod assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));

//load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,() => {console.log(`Server port at https://localhost:${PORT}`)});

