const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');

authRouter.get('/requestToken', authController.getToken, (req, res) => {
  return res.status(200).json(res.locals);
});

authRouter.get('/requestInfo', authController.getUserInfo, (req, res) => {
  return res.status(200).json(res.locals);
});

module.exports = authRouter;