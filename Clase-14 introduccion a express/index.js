import express, { application, request, response } from 'express'
import filesystem from 'fs'
/* EXPRESS
nos permite crear APIs (Aplication Programing Interface)

*/

//Aqui guardaremos a nuestra API
const app = express()
//Middleware que nos habilita a recibir consultar por url encoded
app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {
    response.send('hola')
})

app.get('/Fecha', (request, response) => {
    response.send(new Date().toString())
})

app.post('/Usuario', (request, response) => {
    //request es el objeto donde se guardan los datos de consulta
    //request.body es la carga util recivida(los datos recibidos)
    console.log(request.body)
    const usuarios = JSON.parse (filesystem.readFileSync('./usuarios.json', 'utf-8'))
    usuarios.push({nombre: request.body.nombre, email: request.body.email})
    filesystem.writeFileSync('./usuarios.json', JSON.stringify(usuarios), 'utf-8')
    response.send('Usuario registrado')
})

app.post('/usuario', async (request, response) => {
    const usuario ={
        nombre : request.body.nombre,
        email : request.body.email
    }
    let usuarios
    const resultado = filesystem.promises.readFile('./usuarios.json' , 'utf-8')
    if(!resultado){
        usuarios = []
        usuarios.push(usuario)
    }
    else{
        //En caso de que haya usuarios
        usuarios = JSON.parse(resultado)
    }
    usuarios.push(usuario)
    await filesystem.promises.writeFile('./usuarios.json', JSON.stringify(usuarios), {encoding: 'utf-8'})

    response.send('usuario registrado con exito')
})

app.listen(3000, () => {
    console.log('aplicacion escuchandose en http://localhost:3000')
})