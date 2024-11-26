
/* 
params: {
    value:
    array:
}
*/

const VALIDATIONS = {
    'NUMBER': ({value}) => !isNaN(value) && value !== null && value !== '',
    'STRING': ({value}) => value && value.trim() !== '',
    'BOOLEAN': ({value}) => typeof value === 'boolean',
    'NUMERO_POSITIVO': ({value}) => value >= 0,
    'INCLUIDO': ({value, array}) => array.includes(value)
}

export {VALIDATIONS}