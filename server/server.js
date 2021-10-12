const express = require('express');
const path = require('path');
const axios = require('axios');
const PORT = 3000;
const app = express();


app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../assets')));
app.use(cors());

app.get('/', (req, res) => {
  res.render('../client/index.html');
})













app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));






































