import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const user_info = JSON.parse(sessionStorage.getItem('user_info'))
    console.log(user_info)
    return (
        <>
            <h1>Bienvenido {user_info.name}</h1>
            <Link to={'/product/new'}>Crear Producto</Link>
        </>
    );
};

export default Home;