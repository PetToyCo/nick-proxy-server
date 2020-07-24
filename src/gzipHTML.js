const fs = require('fs');
const zlib = require('zlib');

const generateGzipHTML = function() {
  fs.readFile(`${__dirname}/index.html`, (error, data) => {
    if (error) {
      console.log(error);
    }
    const gzipped = zlib.gzipSync(data);
    fs.writeFile(`${__dirname}/../client/index.html`, gzipped, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
};

generateGzipHTML();
