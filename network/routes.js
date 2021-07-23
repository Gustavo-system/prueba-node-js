const holderNetwork = require("../components/user_holder/holderNetwork");
const adminNetwork = require('../components/user_admin/adminNetwork');
const authLogin = require('../components/auth/authNetwork');
const transfersNetwork = require('../components/transfers/transfersNetwork');

const routes = (server) => {
  server.use("/api/auth_login", authLogin);
  server.use("/api/user_admin", adminNetwork);
  server.use("/api/user_holder", holderNetwork);
  server.use("/api/transfers", transfersNetwork);
};

module.exports = routes;
