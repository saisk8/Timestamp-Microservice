// Server.js

const express = require('express');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/:date', (req, res) => {
  var unixDate = 0;
  var naturalDate = '';
  var query = req.params.date;
  res.send(query);
});
app.listen(process.env.PORT || 3000);
