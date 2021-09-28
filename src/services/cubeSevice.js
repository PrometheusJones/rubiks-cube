const Cube = require('../models/Cube.js');


//const getAll = () => cubeDb.slice(); //Clone cubeDb 
const getAll = () => Cube.getAll();

const create = (name, descriptino, imageUrl, difficulty) => {

    let cube = new Cube(name, descriptino, imageUrl, difficulty);

    Cube.add(cube);
};

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;