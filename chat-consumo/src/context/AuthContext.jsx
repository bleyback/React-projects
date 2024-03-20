import { createContext,useState,useContext } from "react";
import { loginRequest } from "../api/auth";
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

    const signup= async (user)=>{
        try{
            const response = await loginRequest(user);
            const data = await response.json(); // Convertir la respuesta a JSON
            if (data.message) return
            console.log(data)
            setUser(data)
            setIsAuthenticated(true)
        }catch(error){
            console.log(error)
        } 
    }
    
    return(
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}
