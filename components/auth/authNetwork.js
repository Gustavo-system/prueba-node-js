const express = require('express');
const response = require("../../network/response");
const authController = require('./authController');
const router = express.Router();

router.post("/", (req, res) => {
    const {email, password} = req.body;

    try {
        console.log(email, password);
        authController.login(email, password)
            .then((respons) => {
                console.log(respons)
                response.success(req, res, respons, 200);
            })
            .catch((err) => {
                console.error(`[authNetwork] datos incorrectos ${err}`);
                response.error(req, res, "BAD REQUEST", 404);
            });

    } catch (err) {
        console.error(`[authNetwork] Error in login auth ${err}`);
        response.error(req, res, 'Error', 500);
    }

});

module.exports = router;