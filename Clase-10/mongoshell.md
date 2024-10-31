ACLARACION: uando ponga <> no es HTML o algo que deban usar, simplemete reemplazen
EJEMPLO:

use <nombre_base_de_datos> | van a usar: use db_classes

MOvernos a la base de datos que queremos usar
use <nombre_data_base>

crear una coleccion

db.createCollection("usuarios")

## insertar en nuestra coleccion

db.<nombre_coleccion_a_insertar>.insertOne (<objeto_de_insercion>)

db.<nombre_coleccion_a_insertar>.inserMany (<array_de_insercion>)

db.usuarios.insertOne({
    nombre: "pepe",
    email: "pepe@gmail.com",
    rol: "usuario",
    password: "pepepass123",
    nro_telefono: "+5443465664",
    direccion: "Argentina, BS AS",
    creado_en: new Date()
})


db.usuarios.insertMany( 
    [{
    nombre: "juan",
    email: "juan@gmail.com",
    rol: "usuario",
    password: "juanpass123",
    nro_telefono: "+5443465665",
    direccion: "Argentina, BS AS",
    creado_en: new Date()
},
{
    nombre: "maria",
    email: "maria@gmail.com",
    rol: "usuario",
    password: "maripass123",
    nro_telefono: "+5443465666",
    direccion: "Argentina, BS AS",
    creado_en: new Date()
}
    ]
)

## buscar elementos en nuestra db 

db.usuarios.find ({email: "pepe@gmail.com"})
db.usuarios.findOne ({email: "pepe@gmail.com"})

## eliminar elementos en nuestra db

db.usuarios.deleteOne ({_id: Objectid("66d9b009f50d8386c0efb3b3")})

## eliminar multiples elementos en nuestra db

db.usuarios.deleteMany ({_id: Objectid("66d9b009f50d8386c0efb3b3")})

## actualizar elementos en nuesrta db

db.usuarios.updateOne(
    {
        "_id": ObjectId("66d9ad9ef50d8386c0efb3b2")
    },
    {
        $set: {
            email: "pepesito@gmail",
            nro_telefono: "675465464",
            nombre: "pepesito",
            password: "pepesito123"
        }
    }
)

