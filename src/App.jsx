import { useState } from "react"


function App() {

  const initialMovies = [
    { title: 'Inception', genre: 'Fantascienza', img: 'https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_.jpg' },
    { title: 'Il Padrino', genre: 'Thriller', img: 'https://erigibbi.wordpress.com/wp-content/uploads/2017/04/il-padrino.jpg?w=1075' },
    { title: 'Titanic', genre: 'Romantico', img: 'https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg' },
    { title: 'Batman', genre: 'Azione', img: 'https://pad.mymovies.it/filmclub/2007/02/131/locandina.jpg' },
    { title: 'Interstellar', genre: 'Fantascienza', img: 'https://m.media-amazon.com/images/M/MV5BZmVlOWIzODktNTMxNC00NGRlLTk0NDQtNWM5MGE2OGUxOWRkXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Pulp Fiction', genre: 'Thriller', img: 'https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg' },
  ]

  const [movies, setMovies] = useState(initialMovies)



  return (
    <>
      <h1>Movies</h1>

      <select class="form-select">
        <option value='' selected>Tutti i generi</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>

      </select>

      <div className="container">
        <div className="row">

          {
            movies.map(movie => (
              <div className="col 12 col-sm-6 col-md-4">
                <div className="card h-100">
                  <img src={movie.img} className="film-img " alt="" />
                  <div className="card-body">
                    <div>
                      <strong>Titolo: </strong>{movie.title}
                    </div>
                    <div>
                      <strong>Genere: </strong>{movie.genre}
                    </div>
                  </div>
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
