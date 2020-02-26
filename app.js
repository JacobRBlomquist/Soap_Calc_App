const express = require('express')
const app = express();
const morgan = require('morgan');
const helmet = require('helmet')


//set up logging / errors
app.use(morgan('dev'))

//security
app.use(helmet());
app.disable('x-powered-by');

//------------------------------
//ROUTES
//------------------------------

const homeRoutes = require('./routes/home');

//static route
app.use(express.static('public'));

//home routes
app.use('/home', homeRoutes);

//default route - redirect to home
app.get('/',(req,res,next)=>{
    res.redirect('/home');
});

//404 Route
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
});

//Error Handling
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.send("<h1>"+error.status + " - " +error.message+"</h1>");
});

module.exports = app;