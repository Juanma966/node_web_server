const { envs } = require('./config/env')



const main =() => {
    console.log(envs)
}

//funcion agnostica(no tiene nombre)
//autoconvocada(termina con())
(async()=>{
    main()
})()