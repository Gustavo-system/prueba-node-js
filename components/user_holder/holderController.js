const holderStore = require("./holderStore");
// create holder
const createHolders = (email, password, name, last_name, age, cuenta, tipo) => {
  const HOLDER = {
    email: email,
    password: password,
    name:name,
    last_name: last_name,
    age: age,
    cuenta: cuenta,
    tipo: tipo,
    date: new Date(),
  };

  console.log(HOLDER);
  return new Promise((resolve, reject) => {
    if (!email || !password || !name || !last_name || !age) {
      console.error("[holderController] Invalid data");
      reject("Invalida data");
    } else {
      holderStore.add(HOLDER);
      resolve(`create holder`);
    }
  });
};

// get holders
const getHolders = () => {
  return new Promise((resolve, reject) => {
    resolve(holderStore.list());
  });
};

// update holders
const updateHolder = (id, name, last_name, age) => {
  return new Promise(async (resolve, reject) => {
    if (!name || !last_name || !age) {
      return reject("Invalid Data");
    } else {
      return await resolve(holderStore.update(id, name, last_name, age));
    }
  });
};

// delete holders
const deleteHolder = (id) => {
  return new Promise(async (resolve, reject) => {
    if (id) {
      return resolve(holderStore.delete(id));
    } else {
      console.error("[holderControler] invalida data, id undefaind");
      reject("Invalida Data");
    }
  });
};

module.exports = {
  createHolders,
  getHolders,
  updateHolder,
  deleteHolder,
};
