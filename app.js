const express = require('express');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const bodyParser = require('body-parser');
const path = require('path');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


//database
const db = require('./config/database');

  //Test db
  db.authenticate()
  .then(()=> console.log('Database connected....'))
.catch(err => console.log('Error:' + err))

const app = express();
//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main',

 handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
//index route
app.get('/', (req, res)=>res.render('index', {layout : 'landing'}));
//gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
