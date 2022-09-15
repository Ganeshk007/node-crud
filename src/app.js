import express from 'express';
import bodyParser from 'body-parser';
import dbConfig from './config/database.config.js';
import UserRoute from './app/routes/user'
import mongoose from 'mongoose';
import EJSLayout from 'express-ejs-layouts';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';


const app = express();
app.use(methodOverride('_method'));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(EJSLayout);
app.set('layout', './layout/layout');
app.use(express.static('src/public'));

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