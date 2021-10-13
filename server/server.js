const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');
const cabinetRouter = require('./routes/cabinetRouter');
const recipeRouter = require('./routes/recipeRouter');
const authRouter = require('./routes/authRouter');

const PORT = 3000;
const app = express();

dotenv.config();

// Parse JSON
app.use(express.json());

// Serve static assets from assets directory
app.use(express.static(path.resolve(__dirname, '../assets')));

// Route to view current cabinet contents
// Request should include userID
// Response should return all ingredient names and ids where user_id is current user
app.get('/ingredients', cabinetRouter);

// Route to add ingredient to cabinet
// Request should include ingredient name, user_id, and type
// Response should include added ingredient
app.post('/ingredients', cabinetRouter);

// Route to remove ingredient to cabinet
// Request should include ingredient id
// Response should include removed ingredient
app.post('/ingredients', cabinetRouter);

// Route to search for recipe with ingredients selected
// Request should include ingredient names
// Response should include recipe names, pictures, and ids
// Response should
app.post('/recipes', recipeRouter);

// Route to receive access token from Google
// app.get('/auth', authRouter);
const googleClientID = process.env.CLIENT_ID;
const requestToken_url = `https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20profile%20email&response_type=token&redirect_uri=http://localhost:8080&client_id=${googleClientID}`

app.get('/requestToken', async (req, res) => {
    console.log('in auth');
    res.redirect(requestToken_url);
});

app.get('/requestInfo', async (req, res) => {
    console.log('in requestInfo');
    const access_token = req.headers.authorization;
    console.log(access_token);
    const requestInfo_url = `https://openidconnect.googleapis.com/v1/userinfo?access_token=${access_token}`

    // sub, name ,email
    try {
        const response = await axios({ method: 'get', url: requestInfo_url });
        console.log(response);
        return res.status(200).send('hello');;
    } catch (err) {
        console.log(err);
    }
})

// Route to serve bundled assets in production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../dist')));
};

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));







