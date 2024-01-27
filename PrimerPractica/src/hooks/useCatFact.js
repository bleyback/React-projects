import { useEffect,useState } from "react"
import {newFact} from "../service/facts.js"

export const useCatFact =()=>{
    const [fact,setFact]=useState()
    
    const refreshFact=async()=>{
        const Fact= await newFact()
        setFact(Fact)
    }
    
    useEffect(refreshFact,[])

    return {fact,refreshFact}
}