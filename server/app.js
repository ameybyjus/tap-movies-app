const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors=require('cors');

const moviesRoute = require('./routes/moviesRoute');

const app = express();


app.use(cors({
  origin:"http://localhost:3000",
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',moviesRoute );


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

app.listen(4000,()=>{
  console.log("Server running on port 4000")
})
