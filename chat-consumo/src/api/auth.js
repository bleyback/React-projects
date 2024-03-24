
const Url="https://chat-nodejs-dev-xfqa.2.us-1.fl0.io/log"


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