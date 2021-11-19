import movies from '../data/database'

const List = () => {
  return(
    <>
      {movies.map (movies => 
        <div key={movies.id}>
          <h2>{movies.name}</h2>
          <p>{movies.genre}</p>
          <img src={movies.image} alt={movies.name}/>
        </div>
      )}
    </>
  )

}

export default List