import { useParams } from "react-router-dom"
import { extractFormData } from "../../Utils/extractFormData"
import { getauthenticatedHeaders } from "../../fetching/http.fetching"
import useProducts from "../../Hooks/useProducts"

const UpdateProduct = () => {
    const {product_id} = useParams()

/*     const {products} = useProducts(product_id)
    console.log({product_id})
    const [title, setTitle] = useState(products.title) */
    console.log(product_id)

    const handleSubmitUpdateProduct = (e) => {
        e.preventDefault()
        const form_HTML = e.target
        const form_values = new FormData(form_HTML)
        const form_fields = {
            title: '',
            description: '',
            price: '',
            stock: '',
            category: '',
        }
        const formValuesObject = extractFormData(form_fields, form_values)
        console.log(form_values)
        console.log(formValuesObject)
        fetch(`http://localhost:3000/api/products/${product_id}`, {
            method: 'PUT',
            headers: getauthenticatedHeaders(),
            body: JSON.stringify(formValuesObject)
        })
        .then(
            (response) => { 
                console.log({ response }) 
                return response.json()
            }
        )
        .then(
            (body) => {
                //Si hubiera algun error, lo imprimen usando el valor de body
                //Por ejemplo, pueden cambiar el estado para que aparezca un error
                if(!body.ok){
                  //setError()
            }
            }
        )
        .catch(
            (error) => { console.error(error) }
        )
    }

    return (
        <div>
            <h1>UpdateProduct</h1>
            <div>
                <form onSubmit={handleSubmitUpdateProduct}>
                    <div>
                        <label htmlFor="title">ingrese nuevo titulo</label>
                        <input name="title" type="text" id="title" />
                    </div>
                    <div>
                        <label htmlFor="description">ingrese nueva descripcion</label>
                        <textarea name="description" id="description"></textarea>
                    </div>
                    <div>
                        <label htmlFor="price">ingrese nuevo precio</label>
                        <input name="price" type="text" id="price"/>
                    </div>
                    <div>
                        <label htmlFor="stock">ingrese nuevo stock</label>
                        <input name="stock" type="text" id="stock"/>
                    </div>
                    <div>
                        <label htmlFor="category">ingrese nueva</label>
                        <input name="category" type="text" id="category"/>
                    </div>
                    <button type="submit">Actualizar</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct