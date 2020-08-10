const express = require('express');
const { render } = require('ejs');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.html');
});

module.exports = router;