const uniqid = require('uniqid')

class Cube {
    static #cubes = [ //Private Static 
        {
            id: 'f2j8et83nsku3zdvas',
            name: 'Mirror',
            descriptino: 'mirror cube',
            imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
            difficulty: '4'
        },
        {
            id: '3mj8et83nsku3zdve0',
            name: 'Ice Cube',
            descriptino: 'Very cold cube',
            imageUrl: 'https://img.discogs.com/oQsbgXka4xaIMzsBvFO3VUyvtIM=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-349388-1489891729-6218.jpeg.jpg',
            difficulty: '6'
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