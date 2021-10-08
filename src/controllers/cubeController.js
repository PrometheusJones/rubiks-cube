const express = require('express');

const cubeService = require('../services/cubeSevice.js');
const cubeAccessoryController = require('./cubeAccessoryController.js');

const router = express.Router();

const getCreateCube = (req, res) => {

    res.render('cube/create');
}

const createCube = async (req, res) => {

    let { name, description, imageUrl, difficulty } = req.body
    try {
        await cubeService.create(name, description, imageUrl, difficulty);
        res.redirect('/')
    } catch (err) {
        res.status(400).send(err.massage).end();
    }
}

const cubeDetails = async (req, res) => {
    let id = req.params.cubeId;
    let cube = await cubeService.getOneDetaild(id);
    console.log(cube);

    res.render('cube/details', cube);
}

router.get('/create', getCreateCube);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
router.use('/:cubeId/accessory', cubeAccessoryController);//use another router for add function

module.exports = router;