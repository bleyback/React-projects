import { createContext,useState,useContext, useEffect } from "react";
import { loginRequest, registerRequest } from "../api/auth";
export const AuthContext =createContext()

export const useAuth=()=>{
    const context =useContext(AuthContext)
    if (!context){
        throw new Error ("useAuth must be used within an AuthProvider")
    }
    return context;
}

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [isAuthenticated,setIsAuthenticated]= useState(false)

    useEffect(()=>{
        console.log(localStorage.getItem('token'))
    },[])
    const signin= async (user)=>{
        try{
            const response = await loginRequest(user);
            const cookieString = response.headers.get('Set-Cookie');
            const cookieValue = cookieString.split(';')[0].split('=')[1];
            localStorage.setItem('token', cookieValue);
            console.log(cookies)
            const data = await response.json(); // Convertir la respuesta a JSON
            if (data.message) return data.message
            console.log(data)
            setUser(data)
            setIsAuthenticated(true)
        }catch(error){
            console.log(error)
        } 
    }
    const signup= async (user)=>{
        try{
            const response = await registerRequest(user);
            const data = await response.json(); // Convertir la respuesta a JSON
            if (data.message) return data
            return false
        }catch(error){
            console.log(error)
        }
    }
    

    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}
