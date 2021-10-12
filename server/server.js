const express = require('express');
const path = require('path');
const axios = require('axios');
const PORT = 3000;
const app = express();


app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../assests')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../dist')));
}

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

