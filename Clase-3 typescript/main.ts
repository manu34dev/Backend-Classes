let nombre: string | null = 'pepe'
nombre = null

/* soy una variable de JS ni mas ni menos */
let datoRandom : any = 'hola'

console.log (nombre)

/* sumar (a, b) devuelv a + b */
function sumar ( a : number , b : number) : number{
    return a + b
}
sumar(5 , 10)

const saludar = (edad : number = 10 , nombre?: string) =>{
    console.log ('mi edad es: ' + edad)
    if(nombre){
        return 'hola ' + nombre
    }
    else{
        return 'hola, no se tu nombre'
    }
}

console.log (saludar(15))
/* interfaz */
interface Persona{
    nombre:string,
    apellido:string,
    edad:number
}
/* objeto */
const persona_1 : Persona = {
    nombre:'pepe',
    apellido: 'suarez',
    edad: 15
}
/* funcion */
const saludarAPersona = (persona : Persona) : void => {
    alert('hola ' + persona.nombre)
}

/* TAREA */
const calcularIva = (numero : number) : number => {
    const numeroIva: number = numero * 0.21
    return numeroIva
}

interface Impuesto {
    iva: number,
    total: number,
    base: number
}

const obtenerImpuestosIva = (numero : number) :  Impuesto => {
    const iva : number = calcularIva(numero)
    const total : number = numero + iva
    const base : number = numero
    return {iva, total, base}
}
/* crear una funcion que se llame crearPersonaje que recibira un nombre, una edad y una ciudad de origen y retornara
un objeto con el sig esquema:
{
    nombre: nombre,
    edad: edad,
    ciudadOrigen: ciudadOrigen,
    vida: 100,
    armadura: 0,
    ataque: 0,
    defensa: 0
} */
/* interfaz va en Mayuscula */
    interface Personaje {
        nombre: string,
        edad: number,
        ciudadDeOrigen: string,
        vida: number,
        ataque: number,
        defensa: number
    }
    const crearPersonaje = (nombre : string , edad : number , ciudadDeOrigen : string) : Personaje =>{
        return{
            nombre,
            edad,
            ciudadDeOrigen,
            vida: 100,
            ataque:1000,
            defensa: 0,

        }

    }


