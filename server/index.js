const express = require('express');
const serveStatic = require('serve-static');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));
server.use(cookieParser());

server.get('/', (req, res, next) => {
  const { PTCItemID, TempItemID} = req.cookies
  if (PTCItemID && TempItemID) {
    res.clearCookie('TempItemID');
    next();
  } else {
    res.status(404).send();
  }
});

server.use(serveStatic('client'));

server.get('/product', (req, res) => {
  const { itemID } = req.query;
  const itemIdNumber = Number.parseInt(itemID);
  const { TempItemID } = req.cookies

  if (itemIdNumber < 100 || itemIdNumber > 199 || itemIdNumber === undefined) {
    res.status(404).send();
  } else if (TempItemID === undefined) {
    res.cookie('TempItemID', itemID).cookie('PTCItemID', itemID).redirect('/');
  }
});


server.listen(3000);