const express = require('express')
const app = express();
const morgan = require('morgan');
const helmet = require('helmet')
const path = require('path');
const bodyParser = require('body-parser')
const partials = require('express-partials');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//set up logging / errors
app.use(morgan('dev'))

//security
app.use(helmet());
app.disable('x-powered-by');

//template engine
app.use(partials())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.set('view options',{layout:'layouts/layout.ejs'})


//------------------------------
//ROUTES
//------------------------------

const homeRoutes = require('./routes/home');
const apiRoutes = require("./routes/api")

//static route
app.use(express.static(path.join(__dirname, '/public')));

//home routes
app.use('/home', homeRoutes);

//api routes
app.use("/api", apiRoutes);

//default route - redirect to home
app.get('/', (req, res, next) => {
    res.redirect('/home');
});

//404 Route
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

//Error Handling
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send("<h1>" + error.status + " - " + error.message + "</h1>");
});

module.exports = app;