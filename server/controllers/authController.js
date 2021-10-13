const db = require('../models/recipeazeModel');


// $googleClientID = '709120347437-t4vnteeqd31bjlrd3fbdocujnq2j1hkf.apps.googleusercontent.com';
// $googleClientSecret = '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';

// This is the URL we'll send the user to first
// to get their authorization
// $authorizeURL = 'https://accounts.google.com/o/oauth2/v2/auth';

// This is Google's OpenID Connect token endpoint
// $tokenURL = 'https://www.googleapis.com/oauth2/v4/token';

// The URL for this script, used as the redirect URL
// $baseURL = 'https://' . $_SERVER['SERVER_NAME']
//     . $_SERVER['PHP_SELF'];

const googleClientID = '709120347437-t4vnteeqd31bjlrd3fbdocujnq2j1hkf.apps.googleusercontent.com';

const oauth_url = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&response_type=code&redirect_uri=http://localhost:3000/cabinet&client_id=${googleClientID}`

const authController = {};

authController.getToken = async (req, res, next) => {
    console.log("in getToken middleware!");
    // try {
    //     const response = await axios.post(oauth_url);
    //     console.log(response);
    // } catch (err) {
    //     console.log('error in oauth', err);
    // }
    // return next();
}

authController.getUserInfo = (req, res, next) => {
    return next();
}

module.exports = authController;