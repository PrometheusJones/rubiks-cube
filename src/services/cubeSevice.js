const Cube = require('../models/Cube.js');


//const getAll = () => cubeDb.slice(); //Clone cubeDb 
const getAll = () => Cube.getAll();

const create = (name, descriptino, imageUrl, difficulty) => {

    let cube = new Cube(name, descriptino, imageUrl, difficulty);

    Cube.add(cube);
};

const getOne = (id) => {
    return Cube.#cubes.find(x => x.id == id)
}

const cubeService = {
    create,
    getAll,
    getOne
};

module.exports = cubeService;