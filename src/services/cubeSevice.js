const Cube = require('../models/Cube.js');

const cubeDb = [
    {
        name: 'Mirror',
        descriptino: 'mirror cube',
        imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
        difficulty: '4'
    }
];

const getAll = () => cubeDb.slice(); //Clone cubeDb 

const create = (name, descriptino, imageUrl, difficulty) => {

    let cube = new Cube(name, descriptino, imageUrl, difficulty);

    cubeDb.push(cube);
};

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;