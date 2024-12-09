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
    <body> 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Registrate su producto</a>
                        <form onSubmit ={handleSubmitNewProduct} >
                            <div >
                                <label htmlFor="title">Ingrese el nombre del producto</label>
                                <input name="title" id="title" placeholder="Producto"/>
                            </div>
                            <div>
                                <label htmlFor="description">Ingrese una descripcion</label>
                                <textarea name="description" id="description"></textarea>
                            </div>
                            <div>
                                <label htmlFor="price">Ingrese el precio del producto</label>
                                <input name="price" id="price" placeholder="100" />
                            </div>
                            <div>
                                <label htmlFor="stock">Ingrese el stock de su producto</label>
                                <input name="stock" id="stock" placeholder="10"/>
                            </div>
                            <div>
                                <label htmlFor="category">Ingrese la categoria</label>
                                <input name="category" id="category" placeholder="Electronica"/>
                            </div>
                            <div>
                                {
                                image && 
                                    <img src={image} alt={image} height="100px" width="100px"/>
                                }
                                <label htmlFor="image">Seleccione su imagen</label>
                                <input name="image" id="image" type="file" onChange={handleChangeFile} accept="image/*"/>
                            </div>
                            <button class="btn btn-outline-dark" type="submit">Crear producto</button>
                            <div>
                                {/* <div class="text-center"><a class="btn btn-outline-dark mt-auto" href='/home'>Volver al inicio</a></div> */}
                                <li class="nav-item"><a class="nav-link active" aria-current="page" href='/home'>Volver al inicio</a></li>
                            </div>
                        </form>
            </div>
        </nav>
    </body>
    )

}

export default CreateProduct