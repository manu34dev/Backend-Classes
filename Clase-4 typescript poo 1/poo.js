/* aca vamos a ver programacion orientada a objeotos en JS */

let idCounter = 1

/* const crearProducto = (nombre , precio , descripcion) =>{
    return{
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        id: idCounter++
        }
    } */

        /* cuando se usa la palabra new la funcion retorna un objeto */
// ESTA ES LA FORMA DE TRABAJAR PROGRAMACION ORIENTADA A OBJETOS EN ES5
/* function Producto (nombre , precio , descripcion){
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    this.id = idCounter++
} */
/* los metodos solo se crean una vez */
/* Producto.prototype.saludar = function(){
    console.log('hola')
} */

/* cada vez que instancie la funcion producto se va a crear y guardar la funcion "saludar" 
- las propiedades se crean cada vez que instancie un objeto 
- los metodos solo se crean una vez (como las funciones)
   */
/* const producto_x = new Producto('pc', 1000, 'lorem')

console.log(producto_x)

producto_x.saludar() */


/* const producto1 =  crearProducto ('pc dell', '800', 'lorem')

const producto2 =  crearProducto ('pc lenovo', '1000', 'lorem')

const producto3 =  crearProducto ('pc alienware', '1500', 'lorem')

console.log(producto1, producto2, producto3) */

//Constructor es una funcion que se invocara al instanciarse la clase
//las clases devuelven objetos
// las clases retornan siempre a this, que es un objeto
/* class Personaje {
    constructor (nombre){
        //crear la propiedad en el objeto con el valor random
        this.propiedad_x = 'ramdom'
        this.nombre = nombre
    }

        comer (comida) {
            return this.nombre + ' esta comiendo ' + comida
        }
    }


//Instanciando la clase personaje
const personaje = new Personaje('pepe')
const personaje_2 = new Personaje('pablo')

alert (personaje.comer('pollo con fritas'))
console.log (personaje.comer('empanadas fritas'))
 */