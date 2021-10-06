const express = require('express');
const accessoryService = require('../services/accessoryService.js');

const router = express.Router();

router.get('/create', (req, res) => {
    res.render('accessory/create');

});

router.post('/create', async (req, res) => {
    let accessory = req.body;

    await accessoryService.create(accessory.name, accessory.imageUrl, accessory.description)

    res.redirect('/');
});



module.exports = router;
