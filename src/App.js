import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import Header from './components/Header';
import Trailer from './components/Trailer';
import Reviews from './components/Reviews';
import Login from './components/Login';
import Books from './components/Books';
import Register from './components/Register';
import Home from './components/Home';

function App() {
    const [movies, setMovies] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [movie, setMovie] = useState([]);
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        getMovies()
    },[]);

    const logIn = () => {

    }

    const register = () => {

    }

    const getBooks = () => {

    }

    const getBook = () => {

    }

    const addReview = async (text, imdbId) => {
        const res = await fetch('http://localhost:8080/api/v1/reviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({reviewBody:text,imdbId:imdbId})
        })
        const data = await res.json()
        setReviews([...reviews, data])
    }

    const getMovies = async () => {
        const res = await fetch("http://localhost:8080/api/v1/movies")
        setMovies(await res.json())
    }

    const getMovie = async (imdbId) => {
        const res = await fetch(`http://localhost:8080/api/v1/movies/${imdbId}`);
        const data = await res.json();
        setMovie(data);
        setReviews(data.reviewIds);
    }

  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Movies" element={<Movies movies={movies} />} />
                <Route path="/Books" element={<Books books={books} />} />
                <Route path="/Login" element={<Login logIn={logIn} />} />
                <Route path="/Register" element={<Register register={register} />} />
                <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
                <Route path="/Reviews/:imdbId" element={<Reviews onAdd={addReview} getMovie={getMovie} movie={movie} reviews={reviews} />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
