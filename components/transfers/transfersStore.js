const transfersModel = require('./transfersModel');

const getTransfers = async () => {
    return await transfersModel.find();
};

const addTransfers = (transfer) => {
    const myTransfer = new transfersModel(transfer);
    myTransfer.save();
};

module.exports = {
    list: getTransfers,
    add: addTransfers
}