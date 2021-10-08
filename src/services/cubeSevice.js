const Cube = require('../models/Cube.js');
const Accessory = require('../models/Accessory.js');


//const getAll = () => cubeDb.slice(); //Clone cubeDb 
const getAll = () => Cube.find().lean();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty
    });

    return cube.save();
};

const getOne = (id) => {
    return Cube.findById(id).lean()
};
const getOneDetaild = (id) => {
    return Cube.findById(id).populate('accessories').lean()
};

const search = async (text, from, to) => {
    let result = await getAll();
    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
    }

    if (from) {
        result = result.filter(x => Number(x.difficulty) >= from);
    }

    if (to) {
        result = result.filter(x => Number(x.difficulty) <= to);
    }

    if (!text && !from && !to) {
        result = []
    }
    return result

}

const attachAccessory = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save();
}

const cubeService = {
    create,
    getAll,
    getOne,
    search,
    attachAccessory,
    getOneDetaild
};

module.exports = cubeService;