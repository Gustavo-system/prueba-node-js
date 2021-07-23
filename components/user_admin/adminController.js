const adminStore = require("./adminStore");

const createAdmin = (email, password, name, tipo) => {
  const ADMIN = {
    email: email,
    password: password,
    name:name,
    tipo: tipo,
    date: new Date(),
  };

  console.log(ADMIN);
  return new Promise((resolve, reject) => {
    if (!email || !password || !name) {
      console.error("[adminController] Invalid data");
      reject("Invalida data");
    } else {
      adminStore.add(ADMIN);
      resolve(`create admin`);
    }
  });
};

const getAdmin = () => {
  return new Promise((resolve, reject) => {
    resolve(adminStore.list());
  });
};

module.exports = {
    createAdmin,
    getAdmin,
};