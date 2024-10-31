const { calcularIva } = require('./utils/calculosVarios.js')
const {fomatearPrecio, formatearPrecio} = require('./utils/formatos.js')
const {crearTxt, leerTxt, crearJson} = require('./utils/sistemaArchivos.js')

const precio_vaso = 20

const objeto_iva = calcularIva (precio_vaso)

console.log (objeto_iva)
console.log ('el iva del vaso es: ' + formatearPrecio (objeto_iva.iva))

/* crearTxt('archivo2.txt', 'wow esto es node.js') */
/* leerTxt() */

const persona = {
    nombre: 'pepe',
    edad: 90
}

crearJson ('persona-1' + persona)

/* 
    Modulos:

    -utils/validaciones.js
    -validarEmail
    -validarNumero
    -validarNombre 

    probar las funciones en index.js

    ejemplo:

    let email_recibido = 'pepe@pepe'
    console.log(validarEmail(email.recibido)) deberia devolver false
*/