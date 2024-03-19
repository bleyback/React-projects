import React from 'react';
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie';


const Url="http://localhost:1234/log/login"
function Login (){
    const [cookieValue, setCookieValue] = useState('');
    const [req,setReq]=useState('')

    const handleLog =async (event)=>{
        event.preventDefault()
        const {email,password}= Object.fromEntries(new window.FormData(event.target) )
        if(!email || !password) return setReq("LLena todo los campos")
        setReq("")
        
        try {
            const response = await fetch(Url, {
            method: 'POST', // Método de la solicitud
            headers: {
              'Content-Type': 'application/json' // Tipo de contenido del cuerpo
            },
            body: JSON.stringify({ 
                email:email,
                password:password
            }),credentials: 'include'
            },);

            const data = await response.json(); // Convertir la respuesta a JSON
            console.log(data)
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }

    const mostrarCookie= async()=>{
        try {
            const response = await fetch("https://chat-nodejs-dev-xfqa.2.us-1.fl0.io/log/profile", {
            method: 'GET', // Método de la solicitud
        });

            const data = await response.json(); // Convertir la respuesta a JSON
    
            console.log(data)
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }

    }
    return(
        <>
            <div className="Register">
                <div className="form-container">
                    <form onSubmit={handleLog}>
                        <div className="form-group">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" placeholder="Introduce tu correo electrónico"/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" placeholder="Introduce tu contraseña"/>
                        </div>
                        <div className="form-group">
                        <button type="submit">Enviar</button>
                        {
                            req ? (
                                <a>{req}</a>
                            ): (<></>)
                        }
                        </div>
                    </form>
                </div>
                <button onClick={mostrarCookie}>mostrar cookie</button>
            </div>
        </>
    )
}

export default Login