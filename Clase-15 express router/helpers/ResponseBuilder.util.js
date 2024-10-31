/* objetc.freeze es inmutable no se puede editar, no se puede extender ni eliminar */

class ResponseBuilder {
    static CODE = Object.freeze ({
        GET_INFO_SUCCES: "GET_INFO_SUCCES"
    })
    constructor(){
        this.response = {
        ok: false,
        status: 500,
        payload: {}
        } 
    }
    setStatus (status){
        this.response.status = status
        return this
    }
    setOK (ok){
        this.response.ok = ok
        return this
    }
    setPayload (payload){
        this.response.payload = payload
        return this
    }
    setCode(code){
        this.code = code
        return this
    }
    build(){
        return this.response
    }
}

export default ResponseBuilder
/* 
response = {
        ok: false,
        status: 500,
        payload: {}
            }
 */

/* const respuesta = new ResponseBuilder()
.setOK(true)
.setPayload({mensaje: 'hola'})
.setStatus(200)
.build() */

/* 
por defecto mi responseBuilder va a ser una respuesta erronea
*/