const oracion="https://catfact.ninja/fact"
export const newFact=async ()=>{
    const res = await fetch(oracion)
    const data = await res.json()
    const { fact } = data
    return fact
}