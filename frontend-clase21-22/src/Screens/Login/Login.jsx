import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { extractFormData } from "../../Utils/extractFormData";
import { POST, getunnauthenticatedHeaders } from "../../fetching/http.fetching";


const Login = () => {
    const navigate = useNavigate()

    const handleSubmitLoginForm = async(e) => {
        try {
            e.preventDefault()
        const form_HTML = e.target
        const form_values= new FormData(form_HTML)
        const form_fields = {
            'email': '',
            'password': ''
        }
        const formValuesObject = extractFormData(form_fields, form_values)
        const response = await POST ('http://localhost:3000/api/auth/login', {
            headers: getunnauthenticatedHeaders(),
            body: JSON.stringify(formValuesObject)
        })
        const accessToken = response.payload.token
        sessionStorage.setItem('accessToken', accessToken)
        sessionStorage.setItem('user_info', JSON.stringify(response.payload.user))
        navigate('/home')
        }
        catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmitLoginForm}>
            <div>
                <label htmlFor="email">Ingrese su nombre</label>
                <input name="email" id="email" placeholder="pepe@gmail.com"/>
            </div>
            <div>
                <label htmlFor="password">Ingrese su contraseña</label>
                <input name="password" id="password" placeholder="contraseña"/>
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
        <div>
        <span>Si aun no tienes cuenta puedes ir a <Link to="/register">Registrarte</Link></span>
        </div>
        <div>
        <span>Si has olvidado tu contraseña puedes ir a <Link to="/forgot-password">Reestablecer contraseña</Link></span>
        </div>
        </div>
        )
};

export default Login;