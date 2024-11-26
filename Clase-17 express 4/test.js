/* Este archivo lo usamos para probar nuestros endpoints */

const URL_API = 'http://localhost:8000'
const getProductByIdId = async (id) => {
    const response = await fetch(
        `${URL_API}/api/products/${id}`,
        {
            method: 'GET'
        }
    )
    const data = await response.json()
    console.log(data)
}

const getProducts = async () => {
    const response = await fetch(
        `${URL_API}/api/products`,
        {
            method: 'GET'
        }
    )
    const data = await response.json()
    console.log(data)
}


const createProduct =  async ({title, price, category, stock}) => {
    const response = await fetch(
            `${URL_API}/api/products`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, price, category, stock})
            }
    )
    const data = await response.json()
    console.log(data)
}

const updatedProductsId = async (product_id, newProduct) => {
    const response = await fetch(
        `${URL_API}/api/products/${product_id}`,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }
    )
    console.log({response})
    const data = await response.json()
    console.log(data)
}

//await getProductById(1)
//await getProducts()
await createProduct({title: 'saraza', price: 10, category: 'algo', stock: 10000})