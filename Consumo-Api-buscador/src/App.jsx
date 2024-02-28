import { useEffect, useState } from 'react'
import { Movies } from './components/Movies.jsx'
const ulrMovies='https://chat-nodejs-dev-xfqa.2.us-1.fl0.io/movies'
import './App.css'

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

function App() {
  const {movies,handleSumbit}=useMovies()
  return (
    <div className='page'>
      <div>
        <header>
          <h2>Buscador de peluculas</h2>
          <form onSubmit={handleSumbit}>
            <input name='query' type="text"placeholder='Avengers, Start Wars...'/>
            <button type='submit'>Buscar</button>
          </form>
        </header>
      </div>
      <div>
        <main>
          <Movies movies={movies}/>
        </main>
      </div>
    </div>
  )
}

export default App
