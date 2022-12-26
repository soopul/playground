console.time('server.js');

const express = require('express');
const app = express();
const port = 4700;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.timeEnd('server.js');
});
