const holderModel = require("./holderModel");

// create holder
const addHolder = (holder) => {
  const myHolder = new holderModel(holder);
  myHolder.save();
};

// get holder
const getHolder = async () => {
  return await holderModel.find();
};

// update holder
const updateHolder = async (idx, name, last_name, age) => {
  const holderID = await holderModel.findOne({
    _id: idx,
  });
  holderID.name = name;
  holderID.last_name = last_name;
  holderID.age = age;
  return await holderID.save();
};

// delete holder
const deleteHolder = async (idx) => {
  const holderID = await holderModel.findOne({
    _id: idx,
  });

  return await holderID.deleteOne();
};

module.exports = {
  add: addHolder,
  list: getHolder,
  update: updateHolder,
  delete: deleteHolder,
};
