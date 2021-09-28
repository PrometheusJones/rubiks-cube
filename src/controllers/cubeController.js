const express = require('express');

const cubeService = require('../services/cubeSevice.js')

const router = express.Router();

const getCreateCube = (req, res) => {
    let cubes = cubeService.getAll();

    console.log(cubes);

    res.render('create');
}

const createCube = (req, res) => {

    let { name, description, imageUrl, difficulty } = req.body

    cubeService.create(name, description, imageUrl, difficulty);

    res.redirect('/cube/create')
}

router.get('/create', getCreateCube);
router.post('/create', createCube);

module.exports = router;