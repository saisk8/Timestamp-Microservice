const express = require('express');
const dateformat = require('dateformat');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/:date', (request, response) => {
  const query = request.params.date;
  if (Number.isInteger(Number(query))) {
    const unix = query;
    const naturalDate = dateformat(unix * 1000, 'longDate');
    response.status(500).json({
      unix,
      naturalDate,
    });
  } else {
    const unix = Date.parse(query) / 1000;
    const naturalDate = query;
    response.status(500).json({
      unix,
      naturalDate,
    });
  }
});
app.listen(process.env.PORT || 3000);
