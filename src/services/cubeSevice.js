const Cube = require('../models/Cube.js');


//const getAll = () => cubeDb.slice(); //Clone cubeDb 
const getAll = () => Cube.getAll();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    Cube.add(cube);
};

const getOne = (id) => Cube.getAll().find(x => x.id == id);

const search = (text, from, to) => {
    let cubes = Cube.getAll()
    return cubes.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
}

const cubeService = {
    create,
    getAll,
    getOne,
    search
};

module.exports = cubeService;