import express from "express"
import productsRoutes from "./routes/products.routes.js"

const app = express()
const PORT = 8000

app.use('/api/products', productsRoutes)

app.listen(PORT, () =>{
    console.log(`el servidor se esta ejecutando en http://localhost:${PORT}`)
})

