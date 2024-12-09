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
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Login</a>
                        <form onSubmit={handleSubmitLoginForm}>
                            <div>
                                <label htmlFor="email">Ingrese su nombre</label>
                                <input name="email" id="email" placeholder="pepe@gmail.com"/>
                            </div>
                            <div>
                                <label htmlFor="password">Ingrese su contraseña</label>
                                <input name="password" id="password" placeholder="contraseña"/>
                            </div>
                            <br />
                            <button class="btn btn-outline-dark" type="submit">Iniciar sesion</button>
                        </form>
                    <div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href='/register'>Si aun no tienes cuenta puedes registrate aqui</a></div>
                        </div>
                        
                        </div>
                        <div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href='/forgot-password'>Si has olvidado tu contraseña puedes recuperarla aqui</a></div>
                        </div>
                    </div>
                </div>
            </nav>
        <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Compra con estilo</h1>
                <p class="lead fw-normal text-white-50 mb-0">Los mejores precios te esperan</p>
            </div>
        </div>
        </header>
        <br />
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Proyecto UTN fullstack</p></div>
        </footer>
        
    </body>
        )
};

export default Login;