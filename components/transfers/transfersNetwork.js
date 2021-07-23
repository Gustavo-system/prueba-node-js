const express = require('express');
const response = require("../../network/response");
const transerfsController = require("./transfersController");
const router = express.Router();

router.get('/', (req, res)=>{
    transerfsController.getTransfer()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch((error) => {
            console.error(`[transfersNetwork] Error in request ${error}`);
            response.error(req, res, "Error", 500);
        });
});

router.post("/", (req, res) => {
    const {transmiter, receiver, total} = req.body;

    transerfsController.createTranfer(transmiter, receiver, total)
      .then((fullTransfer) => {
        response.success(req, res, fullTransfer, 201);
      })
      .catch((err) => {
        console.error(`[transfersNetwork] Error in register transfer ${err}`);
        response.error(req, res, "Invalid data", 400);
      });
});

module.exports = router;