import React from "react";
import { useParams } from 'react-router-dom'
import { GET, getunnauthenticatedHeaders } from "../../fetching/http.fetching";


const Verify = () => {

    const {token} = useParams()

    const response = GET (
        `http://localhost:3000/api/auth/verify/${token}`,
        {
            headers: getunnauthenticatedHeaders()
        })
        console.log(response)

    return (
        <div>
            <h1>¡Usted se Verifico Correctamente!</h1>
        </div>
    )

}
export default Verify;