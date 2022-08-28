const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const UserRoute = require('./app/routes/user')
const mongoose = require('mongoose');
const EJSLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');


const app = express();
app.use(methodOverride('_method'));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(EJSLayout);
app.set('layout', './layout/layout');
app.use(express.static('public'));

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


app.use('/user', urlencodedParser, UserRoute)


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});