const express = require('express');
const router = express.Router();

var lists = require('./api/list')
router.get('/list', lists.companyList)

var adds = require('./api/add')
router.post('/add', adds.add)

module.exports = router;