const getLukeSkylwalker = async () =>{
    const URL_API ='https://swapi.dev/api/'
    const response = await fetch (URL_API + '/people/1',{
        method: 'GET'
    })
    const resultado = await response.json()
    console.log (resultado)
}
getLukeSkylwalker()