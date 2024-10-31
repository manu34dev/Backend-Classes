/* tema pediente de TS */

/* 
-datos primitivos
-funciones
-objetos literales
-objetos con interfaz
-arrays?
-metodos avanzados de array?(recibe callback)
*/

//useState devuelve un array con 2 valores, devuelve un initial value y una funcion que permite hacer cambios (setter)
/* const useState = (initialValue : any) => {

    return[initialValue ]
}

//tipar un array de strings
const nombres : string[] = ['pepe' , 'juan']
//tipar un array de numeros
const notas : number[] = [10 , 7 ,2] */
//tipar array especial
/* const arrayEspecial : [string, number] =['pepe' , 20]

const mostrarEdad = (persona : [string, number]) : void =>{
    console.log(persona[1])
} */

/* interface Producto{
    nombre: string,
    id: number,
    precio: number,
    descripcion: string ,
    title: string
}

const prodcuto_1 : Producto = {
    nombre: 'TV samsung',
    id: 1,
    precio: 10,
    descripcion: 'lorem',
    title:'samsung'
}

//las interfaces se pueden reutilizar para hacer arrays grandes
const lista_productos : Producto [] = [
    prodcuto_1,
    {
        nombre: 'Tv LG',
    id: 2,
    precio: 25,
    descripcion: 'lorem' ,
    title: 'LG'
    },
    {
        nombre: 'tv Noblex',
    id: 3,
    precio: 41,
    descripcion: 'lorem',
    title:'la mejor'
    }
]
 */
/* 
forEach => void

map => array

filter => array con el tipo de array original
Productos [] => filter() => Productos []

find => elemento del array | undefined
Productos [] => find() => Producto | undefined
Item [] => find() => Item | undefined

findIndex => number | 

(() => {}) = funcion anonima

*/

/* const tvNoblex : Producto | undefined = lista_productos.find(
        (producto : Producto) : boolean => {
            return producto.id === 3
        }
    )
    console.log (tvNoblex) */

    /* Quiero un array de booleanos donde los productos cuyo precio sea menor a 40 esten como true, pero los que sean mayores o iguales esten como false

[
    {precio: 10},
    {precio: 20},
    {precio: 41},
    {precio: 50}
]

return 

[
    true,
    true,
    false,
    false
]
*/

/* const listaBool : Boolean[] = lista_productos.map(
    (obj : Producto) : boolean => {
      return (obj.precio < 40) ? true : false
    })
    console.log(listaBool) */





/* aca veremos programacion orientada a objetos en TS */

/* class Personaje {
    nombre : string

    constructor(nombre: string){
        this.nombre = nombre
    }

    comer (comida: string) : string {
        return this.nombre + ' esta comiendo ' + comida
    }
}

const personaje_principal : Personaje = new Personaje ('pepe')
let mensaje : string = personaje_principal.comer ('pollo frito')
document.write(mensaje)
 */
let id_counter = 0

class Producto{
    nombre : string
    precio : number

    constructor(nombre : string , precio : number){
        this.nombre = nombre
        this.precio = precio
    }
}

class ManejadorProductos{
    productos : Producto []
    id : number

    constructor (){
        this.productos = []
        this.id = id_counter++
    }
    //metodo
    agregarProduto (producto : Producto) : Producto[] {
        this.productos.push(producto)
        return this.productos
    }
}

const manejadorProducto : ManejadorProductos = new ManejadorProductos()

const prodcuto_1 : Producto = new Producto ('tv samsung', 700)

manejadorProducto.agregarProduto(prodcuto_1)

console.log(manejadorProducto)

