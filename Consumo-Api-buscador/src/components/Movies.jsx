export function Movies ({movies}){
    
    if(movies){
        if(movies.length<=0){
            return(
                <p>No se han encontrado peliculas</p>
            )
        }
    return(    
    <ul>
        {
            movies.map(movie=>(
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <h4>{movie.year}</h4>
                    <img src={movie.poster} alt="" />
                </li>
            ))
        }
    </ul>
    )
    } 
}
