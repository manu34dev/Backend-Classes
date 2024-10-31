//Los archivos repository son los que tendran la responsabilidad de interactuar con los datos
/* 
Ejemplo:
getProductById

ventajas de repositories: 
Poner una capa logica sobre la obtencion de datos separada de la logica de negocio.
Si el dia de mañana por X motivo nos cambian la base de datos, entonces solo debemos modificar la capa logica "repository"

*/

import { leerJson } from "../helpers/JsonManagger.js"

const getUserByName = async (name) => {
    try {
        const usuarios = await leerJson('usuarios')
        const usuarioBuscado = usuarios.find((usuario) => usuario.nombre === name)
        return usuarioBuscado
    } catch (error) {
        console.error(error)
    }
}

export {getUserByName}
