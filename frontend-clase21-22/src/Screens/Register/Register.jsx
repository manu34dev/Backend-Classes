import React from "react";
import { Link } from "react-router-dom";
import { extractFormData } from "../../Utils/extractFormData";
import useForm from "../../Hooks/useForm";
import { getunnauthenticatedHeaders } from "../../fetching/http.fetching";

/* const extractFormData = (form_fields, form_values) => {
        for (let field in form_fields) {
    form_fields[field] = form_values.get(field)
    }
    return form_fields
}; */


const Register = () => {

    const form_fields = {
        'name': '',
        'email': '',
        'password': ''
    }
    const {form_values_state, handleChangeInputValue} = useForm(form_fields)

    const handleSubmitRegisterForm = (e) => {
        e.preventDefault()
        const form_HTML = e.target

        const body = POST (
            'http://localhost:3000/api/auth/register', 
            {
                headers: getunnauthenticatedHeaders(),
                body: JSON.stringify(form_values_state)
            }
            )
        console.log(body)

    }
    return (
        <div>
            <h1>Registrate en nuestra web</h1>
                <form onSubmit={handleSubmitRegisterForm}>
                    <div>
                        <label htmlFor="name">Ingrese su nombre</label>
                        <input 
                            name="name" 
                            id="name" 
                            placeholder="Pepe Suarez" 
                            onChange={handleChangeInputValue}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Ingrese su e-mail</label>
                        <input 
                            name="email" 
                            id="email" 
                            placeholder="pepe@gmail.com" 
                            onChange={handleChangeInputValue}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Ingrese su contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="escriba su contraseña" 
                            onChange={handleChangeInputValue}
                        />
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
                <span>Si ya tienes cuenta puedes ir a <Link to="/login">Login</Link></span>
            
        </div>
        )

}
export default Register;