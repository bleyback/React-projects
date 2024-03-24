import React, { useState,useEffect } from 'react';
import '../styles/forms.css'
import { useNavigate,Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register (){
    const [req,setReq]=useState('')
    const {signup,isAuthenticated}= useAuth()
    const navigate=useNavigate()
    useEffect(()=>{
        if(isAuthenticated) navigate('/chat')
    },[isAuthenticated])
    const handleRegister= async (event)=>{
        event.preventDefault()
        const {username,email,password}= Object.fromEntries(new window.FormData(event.target) )
        if(!email  || !username || !password) return setReq("LLena todo los campos")
        setReq("")
        const user= {username:username,email:email,password:password}
            try {
                const res= await signup(user);
                if (!res) setReq("Correo ya en uso") 
                if(res) setReq("Creado exitosamente")
                setTimeout(()=>{
                    navigate("/")
                },"2000")
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
                            <Link to="/">Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register