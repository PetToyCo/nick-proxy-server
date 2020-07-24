const express = require('express');
const serveStatic = require('serve-static');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));

server.use('/', function (req, res, next) {
  const { url } = req;

  if (!url.includes('.png') && !url.includes('.ico') && !url.includes('averageReviews') && !url.includes('reviews')) {
    res.set('Content-Encoding', 'gzip');
  }
  next();
});

server.use(serveStatic('./client/'));

server.get('/product', (req, res) => {
  const { itemID } = req.query;
  const itemIdNumber = Number.parseInt(itemID, 10);

  if (itemIdNumber < 100 || itemIdNumber > 199 || itemIdNumber === undefined) {
    res.status(404).send('itemID invalid');
  } else {
    res.sendFile(`${__dirname}/client/index.html`);
  }
});

server.listen(3000);
