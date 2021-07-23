const transferStore = require('./transfersStore');

const getTransfer = () => {
    return new Promise((resolve, reject) => {
      resolve(transferStore.list());
    });
};

const createTranfer = (transmiter, receiver, total) => {
    const TRANSFER = {
        transmiter,
        receiver,
        total,
        date: new Date(),
    };
  
    console.log(TRANSFER);
    return new Promise((resolve, reject) => {
      if (!transmiter || !receiver || !total) {
        console.error("[transfersController] Invalid data");
        reject("Invalida data");
      } else {
        transferStore.add(TRANSFER);
        resolve(`create tranfer`);
      }
    });

};

module.exports = {
    getTransfer,
    createTranfer,
}