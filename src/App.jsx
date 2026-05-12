import { useEffect, useState } from "react"


function App() {

  const initialMovies = [
    { id: 1, title: 'Inception', genre: 'Fantascienza', img: 'https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_.jpg' },
    { id: 2, title: 'Il Padrino', genre: 'Thriller', img: 'https://erigibbi.wordpress.com/wp-content/uploads/2017/04/il-padrino.jpg?w=1075' },
    { id: 3, title: 'Titanic', genre: 'Romantico', img: 'https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg' },
    { id: 4, title: 'Batman', genre: 'Azione', img: 'https://pad.mymovies.it/filmclub/2007/02/131/locandina.jpg' },
    { id: 5, title: 'Interstellar', genre: 'Fantascienza', img: 'https://m.media-amazon.com/images/M/MV5BZmVlOWIzODktNTMxNC00NGRlLTk0NDQtNWM5MGE2OGUxOWRkXkEyXkFqcGc@._V1_.jpg' },
    { id: 6, title: 'Pulp Fiction', genre: 'Thriller', img: 'https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg' },
  ]

  const [movies, setMovies] = useState(initialMovies)
  const [selectGenre, setSelectGenre] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {

    let filteredMovies = initialMovies

    if (selectGenre) {
      filteredMovies = initialMovies.filter(movie => movie.genre === selectGenre)
    }

    if (search) {
      filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    }

    setMovies(filteredMovies)

  }, [selectGenre, search])

  function getMoviesFiltered(e) {

    setSelectGenre(e.target.value)
  }

  function getTitleFiltered(e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <h1>Movies</h1>

      <div>
        <label htmlFor="search">Search film with title</label>
        <input type="text" value={search} onChange={getTitleFiltered} />
      </div>

      <div>
        <label htmlFor="genre">Genre</label>
        <select className="form-select" id="select-genre" value={selectGenre} onChange={getMoviesFiltered}>
          <option value=''>Tutti i generi</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>

        </select>
      </div>

      <div className="container">
        <div className="row">

          {
            movies.map(movie => (
              <div className="col 12 col-sm-6 col-md-4" key={movie.id}>
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
