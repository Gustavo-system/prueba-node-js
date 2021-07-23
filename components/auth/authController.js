const adminModel = require('../user_admin/adminModel');
const response = require('../../network/response');

const login = async (email, password) => {
    const user = await adminModel.findOne({
        email:email
    });
    
    if(!user){
        console.error(`[authController] no existe el correo`);
        return response.error(req, res, 'No existe el usuario', 404);
    }

    if(password === user.password){
        return await user;
    }else{
        console.error(`[authController] constraseña no valida o incorrecta`);
        return response.error(req, res, 'contraseña incorrecta', 404);
    }

};

module.exports = {
    login
}