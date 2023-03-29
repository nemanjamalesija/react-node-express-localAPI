import { useState, useEffect } from 'react';
import './App.css';

type singleMovie = {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  description: string;
  director: string[];
  trailer: string;
  genre: string[];
  writers: string[];
  imdbid: string;
  bookmarkered?: boolean;
};

function App() {
  const [movies, setMovies] = useState<singleMovie>();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:3001/api/movies');
      const moviesAPI = await response.json();
      setMovies(moviesAPI);
    };

    fetchMovies();
  }, []);

  return <div className='App'>useEffect</div>;
}

export default App;
