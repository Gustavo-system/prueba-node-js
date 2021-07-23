const adminModel = require("./adminModel");

const addAdmin = (admin) => {
  const myAdmin = new adminModel(admin);
  myAdmin.save();
};

const getAdmin = async () => {
  return await adminModel.find();
};

module.exports = {
    add: addAdmin,
    list: getAdmin,
};