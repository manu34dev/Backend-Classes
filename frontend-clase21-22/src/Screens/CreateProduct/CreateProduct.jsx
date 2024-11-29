import React from "react";
import { Link } from "react-router-dom";
import { getauthenticatedHeaders, POST } from "../../fetching/http.fetching";
import { extractFormData } from "../../Utils/extractFormData";

const CreateProduct = () => {

    const [image, setImage] = React.useState('')
    const handleSubmitNewProduct = async(e) => {
        try {
            e.preventDefault()
        const form_HTML = e.target
        const form_values= new FormData(form_HTML)
        const form_fields = {
            title : '',
            description : '',
            price : '',
            stock : '',
            category : '',
        }
        const formValuesObject = extractFormData(form_fields, form_values)
        console.log(formValuesObject)
        //Agrego la image al objeto de los valores del form
        formValuesObject.image = image
        const response = await POST ('http://localhost:3000/api/products', {
            headers: getauthenticatedHeaders(),
            body: JSON.stringify(formValuesObject)
        })
        console.log(response)
        
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleChangeFile = (e) => {
        //Buscar el archivo subido por el input
        const file_found = e.target.files[0]
        const reader = new FileReader()

        //Le digo al reader que cuando termine de cargar ejecute X callback 
        reader.onloadend = 
            () => {
            console.log('File Loaded')
            setImage(reader.result)
        }
    

        //Le digo al reader que lea el archivo
        if (file_found) {
            reader.readAsDataURL(file_found)
        }
    }

    return (
        <>
        <form onSubmit ={handleSubmitNewProduct} >
            <div>
                <label htmlFor="title">Ingrese el nombre del producto</label>
                <input name="title" id="title" placeholder="Yerba Marolio"/>
            </div>
            <div>
                <label htmlFor="description">Ingrese una descripcion</label>
                <textarea name="description" id="description"></textarea>
            </div>
            <div>
                <label htmlFor="price">Ingrese el precio del producto</label>
                <input name="price" id="price" />
            </div>
            <div>
                <label htmlFor="stock">Ingrese el stock de su producto</label>
                <input name="stock" id="stock"/>
            </div>
            <div>
                <label htmlFor="category">Ingrese la categoria</label>
                <input name="category" id="category"/>
            </div>
            <div>
                {
                    image && 
                    <img src={image} alt={image} height="100px" width="100px"/>
                }
                <label htmlFor="image">Seleccione su imagen</label>
                <input name="image" id="image" type="file" onChange={handleChangeFile} accept="image/*"/>
            </div>
            <button type="submit">Crear Producto</button>
            <div>
            <span>Volver a <Link to="/home">Inicio</Link></span>
            </div>
        </form>
        </>
    )

}

export default CreateProduct