//este archivo lo usamos para probar nuestros endpoints

const URL_API = 'http://localhost:8000'
const getProducts = async () =>{
    const response = await fetch(
        URL_API + '/api/products/1',
    {
        method: 'GET'
    }
    )
    const resultData = await response.json()
    console.log(resultData)
}

await getProducts()