"use strict";
let nombre = 'pepe';
nombre = null;
/* soy una variable de JS ni mas ni menos */
let datoRandom = 'hola';
console.log(nombre);
/* sumar (a, b) devuelv a + b */
function sumar(a, b) {
    return a + b;
}
sumar(5, 10);
const saludar = (edad = 10, nombre) => {
    console.log('mi edad es: ' + edad);
    if (nombre) {
        return 'hola ' + nombre;
    }
    else {
        return 'hola, no se tu nombre';
    }
};
console.log(saludar(15));
/* objeto */
const persona_1 = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 15
};
/* funcion */
const saludarAPersona = (persona) => {
    alert('hola ' + persona.nombre);
};
/* TAREA */
const calcularIva = (numero) => {
    const numeroIva = numero * 0.21;
    return numeroIva;
};
const obtenerImpuestosIva = (numero) => {
    const iva = calcularIva(numero);
    const total = numero + iva;
    const base = numero;
    return { iva, total, base };
};
const crearPersonaje = (nombre, edad, ciudadDeOrigen) => {
    return {
        nombre,
        edad,
        ciudadDeOrigen,
        vida: 100,
        ataque: 1000,
        defensa: 0,
    };
};
