import { useState,useEffect } from "react"
import './app.css'
import { newFact } from "./service/facts"
import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from "./hooks/useCatFact.js"


export function App(){
    const {fact,refreshFact}=useCatFact()
    const {imgurl}=useCatImage({fact})
    
    
    const handleClick =async()=>{
        refreshFact()
    }
    return(
        <main>
            <h1>Hola gato</h1>
            {fact && <p>{fact}</p>}
            {imgurl && <img src={imgurl}alt={fact}/>}
            <button onClick={handleClick}>New sentence</button>
        </main>
            
    )
}