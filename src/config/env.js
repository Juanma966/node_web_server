// forma antigua de hacer el import
require('dotenv').config();

const { get } = require('env-var');//para config las var-ent para que sean numerica,tipo puerta,etc

//configuracion de las variables de entorno
const envs = {
    PORT: get('PORT').required().asPortNumber(),//get de la var-ent port,obligatorio y numerico
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()//get de var-ent public_path ,con valor de default y en string
}

//exportamos para usar en app.js
module.exports = {
    envs
}

