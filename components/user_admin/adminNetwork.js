const express = require('express');
const response = require("../../network/response");
const adminController = require("./adminController");
const router = express.Router();

router.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const tipo = req.body.tipo || 'Admin';

    adminController
      .createAdmin(email, password, name, tipo)
      .then((fullAdmin) => {
        response.success(req, res, JSON.parse(fullAdmin), 200);
      })
      .catch((err) => {
        console.error(`[adminNetwork] Error in register admin ${err}`);
        response.error(req, res, "Invalid data", 400);
      });
});

router.get("/", (req, res) => {
    adminController
      .getAdmin()
      .then((list) => {
        response.success(req, res, list, 200);
      })
      .catch((error) => {
        console.error(`[adminNetwortk] Error in request ${error}`);
        response.error(req, res, "Error", 500);
      });
  });

module.exports = router;
