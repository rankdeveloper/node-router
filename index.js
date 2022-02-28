const express = require('express');
const router = require('./views/router/index.js');
const app = express();

app.use('/', router);

app.set('view engine', 'ejs');
// app.set('views', './views');

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/about', (req, res) => {
//   res.render('about');
// });

app.listen(2000, () => {
  console.log('Server is listening on PORT 2000...');
});
