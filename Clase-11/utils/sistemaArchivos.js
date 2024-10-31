/* Modulo nativo del sistema de archivos de Node JS */
const filesystem = require('fs')


const crearTxt = (direccion_y_nombre,contenido) =>{
    /* 
    Crear un archivos de manera sincronica
    writeFileSync:
        -direccion o path con el nombre de archivo y extension
        -info o data a escribir
        -encoding o codificacion
    */
    filesystem.writeFileSync('./archivos/' + direccion_y_nombre, contenido, 'utf-8')
}

const leerTxt = () =>{
    const read = filesystem.readFileSync('./archivos/archivo.txt', 'utf-8')
    console.log('el contenido de archivo.txt es : ' + read )
}

const crearJson = (direccion_y_nombre, contenido) =>{
    filesystem.writeFileSync('./archivos/json', + direccion_y_nombre + '.json', JSON.stringify(contenido), 'utf-8')
    console.log('Archivo: ./archivos/json/${direccion_y_nombre}.json ah sido creado con exito')
}


module.exports = {crearTxt: crearTxt, leerTxt, crearJson}
