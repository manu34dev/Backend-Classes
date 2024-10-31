//este archivo lo usamos para probar nuestros endpoints

const URL_API = 'http://localhost:8000'
const getProductById = async (id) =>{
    const response = await fetch(
        `${URL_API}/api/products/${id}`,
    {
        method: 'GET'
    }
    )
    const resultData = await response.json()
    console.log(resultData)
}

const getProducts = async () => {
    const response = await fetch(
        `${URL_API}/api/products/`,
    {
        method: 'GET'
    }
    )
    const resultData = await response.json()
    console.log(resultData)
}

const createProduct = async ({title, price, id, category, stock}) => {
    const response = await fetch (
            `${URL_API}/api/products/`,
        {
            method: 'POST',
            body: JSON.stringify({title, price, id, category, stock})
        }
    )
    const data = await response.json()
} 

createProduct({title: 'saraza', price: 10, category: 'algo', stock: 10000})