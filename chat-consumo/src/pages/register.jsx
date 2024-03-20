import React, { useState } from 'react';
import '../styles/forms.css'
import { useNavigate } from 'react-router-dom';

const Url="https://chat-nodejs-dev-xfqa.2.us-1.fl0.io/log/register"
function Register (){
    const [req,setReq]=useState('')
    const [responseData, setResponseData] = useState(null);
    const navigate=useNavigate()
    const handleRegister= async (event)=>{
        event.preventDefault()
        const {username,email,password}= Object.fromEntries(new window.FormData(event.target) )
        if(!email  || !username || !password) return setReq("LLena todo los campos")
        setReq("")
        
            try {
                const response = await fetch(Url, {
                method: 'POST', // Método de la solicitud
                headers: {
                  'Content-Type': 'application/json' // Tipo de contenido del cuerpo
                },
                body: JSON.stringify({ 
                    username: username,
                    email:email,
                    password:password
                }) 
            });

                const data = await response.json(); // Convertir la respuesta a JSON
        
                setResponseData(data); // Actualizar el estado con la respuesta recibida
                console.log(data)
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        
    }


    return(
        <>
            <div className="Register">
                <div className="form-container">
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                        <label htmlFor="username">Nombre:</label>
                        <input type="text" id="name" name="username" placeholder="Introduce tu nombre"/>
                        </div>
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
                        <div className="form-group">
                            <button onClick={e=>navigate("/")}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register