<<<<<<< HEAD
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var recruteur = require('./routes/recruteur');
var admin = require('./routes/admin');
var login = require('./routes/login')

var app = express();
=======
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let index = require('./routes/index');
let users = require('./routes/users');
let recruteur = require('./routes/recruteur');
let admin = require('./routes/admin');
let blog = require('./routes/blog');
let emploi = require('./routes/emploi');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest : 'tmp/'})
/* TIBO*/
let transaction = require('./data_access/transaction.js');
  /*End TIBO */
let app = express();
var login = require('./routes/login');


// upload de fichier sur le site

app.post('/emploi', upload.single('monfichier'), function (req, res, next) {
  fs.rename(req.file.path, 'public/images/' + req.file.originalname, function(err){
    if (err) {
        res.send('problème durant le déplacement');
    } else {
        res.send('Fichier uploadé avec succès');
    }
  });
})

/*TIBO*/
  app.get('/contact', (req, res)=>{
      transaction.getAllContacts(res);
    });

  /*End TIBO */
>>>>>>> d93d923828aac52b72c0d0b2eeab5d6222937f38

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.use('/', index);
app.use('/users', users);
app.use('/recruteur', recruteur);
app.use('/admin', admin);
app.use('/login', login);
=======
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', index);
app.use('/users', users);
app.use('/recruteur', recruteur);
app.use('/login', login);
app.use('/admin', admin);
app.use('/blog', blog);
app.use('/emploi', emploi)



>>>>>>> d93d923828aac52b72c0d0b2eeab5d6222937f38

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
