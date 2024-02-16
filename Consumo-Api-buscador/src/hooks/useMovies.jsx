import { useEffect, useState } from 'react'



export function useMovies(){
    const [serch,setSerch]=useState("")
    const [movies,setMovies]=useState()

    const handleSumbit = (event)=>{
    event.preventDefault()
    const {query}= Object.fromEntries(new window.FormData(event.target) )
    setSerch(query)
    }
    useEffect(()=>{
    fetch(ulrMovies)
    .then(res=>res.json()).then(
        json=>{
            setMovies(json.filter((movie)=>movie.title.toUpperCase().includes(serch.toUpperCase())))
        }
    )
    },[serch])

    return ({movies,handleSumbit})
}

