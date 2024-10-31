/* crear una funcion que reciva precio y retorne un objeto

recibe 100{
    iva: 21,
    precio_original: 100,
    precio_final: 121
}
*/

const calcularIva = (price) =>{
    const iva = price * 0.21
    const final_price = price + iva
    return{
        iva,
        original_price: price,
        final_price,
    }
}

module.exports = {nombre : 'pepe' , calcularIva : calcularIva}


