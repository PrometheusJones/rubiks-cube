const Cube = require('../models/Cube.js');


//const getAll = () => cubeDb.slice(); //Clone cubeDb 
const getAll = () => Cube.getAll();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const getOne = (id) => Cube.getAll().find(x => x.id == id);

const cubeService = {
    create,
    getAll,
    getOne
};

module.exports = cubeService;