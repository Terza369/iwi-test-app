const express = require('express');

const userController = require("../controllers/user");

const router = express.Router();

router.get('/user/matches', userController.getUserMatches);

module.exports = router;