const Accessory = require('../models/Accessory.js')

async function create(name, imageUrl, description) {
   return Accessory.create({ name, imageUrl, description });
}

async function getAll() {
   return Accessory.find().lean();
}




const accessoryService = {
   create,
   getAll,
}

module.exports = accessoryService;