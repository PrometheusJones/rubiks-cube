const router = require('express').Router({ mergeParams: true });//use this option to get id pfrom upper level in url

const accessoryService = require('../services/accessoryService.js');
const cubeService = require('../services/cubeSevice.js');


router.get('/add', async (req, res) => {
    let cubeId = req.params.cubeId;
    let cube = await cubeService.getOne(cubeId);

    let accessories = await accessoryService.getAllWithout(cube.accessories);

    res.render('cube/accessory/add', { cube, accessories })
});

router.post('/add', async (req, res) => {
    let cubeId = req.params.cubeId

    await cubeService.attachAccessory(cubeId, req.body.accessory);

    res.redirect(`/cube/${cubeId}`)
});

module.exports = router