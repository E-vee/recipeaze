const express = require('express');
const path = require('path');
const axios = require('axios');
const PORT = 3000;
const app = express();


app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../assests')));


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

