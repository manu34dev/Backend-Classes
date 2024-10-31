const formatearPrecio = (precio) =>{
    return '$ ' + Number (precio).toFixed(2)
}

module.exports = {formatearPrecio}