
const Url="http://localhost:1234/log"


export const loginRequest = user=>  fetch( `${Url}/login`, {
    method: 'POST', // Método de la solicitud
    headers: {
        'Content-Type': 'application/json' //Tipo de contenido del cuerpo
    },
    body: JSON.stringify(user),credentials: 'include'
    },);
export const registerRequest = user=>  fetch( `${Url}/register`, {
    method: 'POST', // Método de la solicitud
    headers: {
        'Content-Type': 'application/json' //Tipo de contenido del cuerpo
    },
    body: JSON.stringify(user),credentials: 'include'
    },);