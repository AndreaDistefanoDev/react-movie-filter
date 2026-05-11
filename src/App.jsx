import { useState } from "react"


function App() {

  const initialMovies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [movies, setMovies] = useState(initialMovies)



  return (
    <>
      <h1>Movies</h1>

      <div className="container">
        <div className="row">

          {
            movies.map(movie => (
              <div className="col">
                <div>
                  <strong>Titolo: </strong>{movie.title}
                </div>
                <div>
                  <strong>Genere: </strong>{movie.genre}
                </div>
              </div>

            ))
          }

        </div>

      </div>

    </>
  )
}

export default App
