import { useState,useEffect } from "react"
export function useCatImage ({fact}){
    const [imgurl,setimgurl]=useState()

    useEffect(()=>{
        if (!fact) return
        const firstWord= fact.split(' ',3).join(' ')
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res=>res.json())
            .then(response=>{
                console.log(response)
                const imageurl=`https://cataas.com/cat/says/${firstWord}?size=50&color=red`
                setimgurl(imageurl)
        
            })
    },[fact])
    return {imgurl}
}