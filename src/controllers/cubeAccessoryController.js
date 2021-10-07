const router = require('express').Router({ mergeParams: true });//use this option to get id pfrom upper level in url

const cubeService = require('../services/cubeSevice.js');


router.get('/add', async (req, res) => {
    let cubeId = req.params.cubeId;
    let cube = await cubeService.getOne(cubeId);


    res.render('cube/accessory/add', { ...cube })
});

module.exports = router