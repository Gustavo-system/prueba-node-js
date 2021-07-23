const express = require('express');
const response = require("../../network/response");
const holderController = require("./holderController");
const router = express.Router();

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const last_name = req.body.last_name;
  const age = req.body.age;
  const cuenta = req.body.cuenta || 0;
  const tipo = req.body.tipo || 'holder';

  if(tipo === 'Admin'){
    holderController
      .createHolders(email, password, name, last_name, age, cuenta, tipo)
      .then((fullHolder) => {
        response.success(req, res, fullHolder, 200);
      })
      .catch((err) => {
        console.error(`[holderNetwork] Error in register ${err}`);
        response.error(req, res, "Invalid data", 400);
      });
  }else{
    response.error(req. res, "UNAUTHORIZED", 401)
  }

});

router.get("/", (req, res) => {
  if(req.body.tipo === 'Admin'){

    holderController
    .getHolders()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((error) => {
      console.error(`[holderNetwortk] Error in request ${error}`);
      response.error(req, res, "Error", 500);
    });

  }else{
    response.error(req, res, "UNAUTHORIZED", 401);
  }

});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const last_name = req.body.last_name;
  const age = req.body.age;

  if(req.quey.tipo === 'Admin'){

    holderController
    .updateHolder(id, name, last_name, age)
    .then((data) => {
      response.success(req, res, data, 200);
      console.log("ok, update success");
    })
    .catch((err) => {
      console.error(`[holderNetwork] Holder not update ${err}`);
      response.error(req, res, "Holder not update", 400);
    });

  }else{
    response.error(req, res, "UNAUTHORIZED", 401);
  }

});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if(req.quey.tipo === 'Admin'){

    holderController
    .deleteHolder(id)
    .then((respons) => {
      response.success(req, res, "delete holder success", 200);
      console.log(`delete holder success`);
    })
    .catch((err) => {
      console.error(`[holderNetwork] holder not delete ${err}`);
      response.error(req, res, error, 500);
    });

  }else{
    response.error(req, res, "UNAUTHORIZED", 401);
  }

});

module.exports = router;