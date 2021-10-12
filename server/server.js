const express = require('express');
const path = require('path');
// const axios = require('axios');
const dotenv = require('dotenv');
const PORT = 3000;
const app = express();

dotenv.config();

console.log('node env is: ', process.env.NODE_ENV);

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../assets')));

if (process.env.NODE_ENV === 'production') {
  console.log('inside production route, should serve dist')
  app.use(express.static(path.resolve(__dirname, '../dist')));
}

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})



// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(400).send('Internal Server Error');
// });

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));












