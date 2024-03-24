import React from 'react';
import {useState,useEffect} from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login (){
    const {signup,isAuthenticated,user}=useAuth()
    const [req,setReq]=useState('')
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(isAuthenticated) navigate('/chat')
    },[isAuthenticated])

    const handleLog =async (event)=>{
        event.preventDefault()
        const {email,password}= Object.fromEntries(new window.FormData(event.target) )
        if(!email || !password) return setReq("LLena todo los campos")
        setReq("")
        const user= {email:email,password:password}
        try {
            const res = await signup(user);
            if (res) setReq(res)
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
                        <div className="form-group">
                            <button onClick={e=>navigate("/register")}>Registrarte</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login