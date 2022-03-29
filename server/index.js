const express = require('express');
const app = express();
const path = require('path');

const init = () => {
  try {
    const port = process.env.PORT || 42069;
    app.listen(port, () => console.log('~~~glistening on port 42069~~~'));
  } catch (error) {
    console.log(error);
  }
};

init();

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
