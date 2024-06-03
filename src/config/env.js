// forma antigua de hacer el import antigua
//require('dotenv').config();
import env from 'dotenv'

//const { get } = require('env-var');//para config las var-ent para que sean numerica,tipo puerta,etc
import envvar from 'env-var';

env.config();
//configuracion de las variables de entorno
export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),//get de la var-ent port,obligatorio y numerico
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()//get de var-ent public_path ,con valor de default y en string
}
