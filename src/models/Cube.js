const uniqid = require('uniqid')

class Cube {
    static #cubes = [ //Private Static 
        {
            id: 'asdasdasda',
            name: 'Mirror',
            descriptino: 'mirror cube',
            imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
            difficulty: '4'
        }
    ];

    constructor(name, descriptino, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.descriptino = descriptino;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }

    static getAll() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube)
    }
}

module.exports = Cube