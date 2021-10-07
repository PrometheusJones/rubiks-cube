const router = require('express').Router({ mergeParams: true });//use this option to get id pfrom upper level in url

const accessoryService = require('../services/accessoryService.js');
const cubeService = require('../services/cubeSevice.js');


router.get('/add', async (req, res) => {
    let cubeId = req.params.cubeId;
    let cube = await cubeService.getOne(cubeId);

    let accessories = await accessoryService.getAll()
    console.log(accessories);
    res.render('cube/accessory/add', { cube, accessories })
});

module.exports = router