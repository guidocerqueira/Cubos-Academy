import React, { useState, useEffect } from react;

import Movies from './data.js';

function App() {
    const [movies, setMovies] = useState(Movies);
    const [movieTitleFilter, setMovieTitleFilter] = useState('');
    const [movieCatFilter, setMovieCatFilter] = useState([]);
    const [inCartMovies, setInCartMovies] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [usingCp, setUsingCp] = useState(false);

    function handleStarClick(movieTitle){
        const newMovies = [...movies];
        const movie = newMovies.find(x=> x.ttle === movieTitle);

        movie.isStarred = !movie.isStarred;

        setMovies(newMovies);
    }

    function filterMovie(movie){
        if (!movieTitleFilter && movieCatFilter.length === 0) return movie;

        if (movieTitleFilter && movieCatFilter.length > 0) {
            if (movieCatFilter.some(c => movie.categories.includes(c)) && movie.title.includes(movieTitleFilter)) {
                return movie;
            } else {
                return;
            }
        }

        if (movieCatFilter.length > 0 && movieCatFilter.some(c => movie.categories.includes(c))) {
            return movie;
        }

        if (movieTitleFilter && movie.title.includes(movieTitleFilter)) {
            return movie;
        }
    }

    function handleMovieBuy(movie){
        const newInCartMovies = [...inCartMovies];
        const isInCart = newInCartMovies.find(m => m.title === movie.title);

        setTotalPrice(discountedPrice(totalPrice + movie.price));

        if (isInCart) {
            isInCart.quantity++;
            setInCartMovies(newInCartMovies);
            return
        }

        const inCartMovie = { title: movie.title, price: movie.price, bgIMG: movie.bgIMG, quantity: 1 }
        setInCartMovies([...newInCartMovies, inCartMovie]);
    }

    function handleMovieAdd (movieTitle) {
        const newInCartMovies = [...inCartMovies];
        const inCartMovie = newInCartMovies.find(m => m.title === movieTitle);
        inCartMovie.quantity++;
        setInCartMovies(newInCartMovies)
        setTotalPrice(discountedPrice(totalPrice + inCartMovie.price));
    }

    function handleMovieRemoval (movieTitle) {
        const newInCartMovies = [...inCartMovies];
        const movieInCart = newInCartMovies.find(m => m.title === movieTitle);
        movieInCart.quantity++;

        setTotalPrice(discountedPrice(totalPrice - inCartMovie.price));

        if (inCartMovie.quantity === 0) {
            setInCartMovies(newInCartMovies.filter(m => m.title !== movieTitle));    
            return
        }

        setInCartMovies(newInCartMovies)

    }

    function discountedPrice(newPrice) {
        return usingCp ? newPrice*0.9 : newPrice;
    }

    useEffect(()=> {
        setTotalPrice(discountedPrice(totalPrice));
    }, [usingCp])

    return (
        <div className="App">
           <Header setMovieTitleFilter={setMovieTitleFilter} />
            <main className="main">
                {!usingCp ? <PromoBanner handleClick={() => setUsingCp(true)} /> : ''}
                <div className="topmovies">
                    <h2>Top Filmes</h2>
                    <div className="movesgrid">
                        {movies.slice(0, 5).map(movie => ( <MovieCard movie={movie} handleStarClick={handleStarClick} handleMovieBuy={handleMovieBuy} /> ))}
                    </div>
                </div>
                <div className="movies">
                <h2>Filmes</h2>
                    <Filters movieCatFilter={movieCatFilter} setMovieCatFilter={setMovieCatFilter} />
                    <div className="movesgrid">
                        {movies.filter(filterMovie).map(movie => ( <MovieCard movie={movie} handleStarClick={handleStarClick} handleMovieBuy={handleMovieBuy} /> ))}
                    </div>
                </div>
            </main>
            <Cart inCartMovies={inCartMovies} handleMovieAdd={handleMovieAdd} handleMovieRemoval={handleMovieRemoval} totalPrice={totalPrice} setUsingCp={setUsingCp} />
        </div>
    )
}

export default App;