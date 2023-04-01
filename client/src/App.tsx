
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

type tourType = {
  id: number;
  name: string;
  duration: number;
  difficulty: string;
};

function App() {
  const [tours, setTours] = useState<singleMovie>();
  const [tour, setTour] = useState<tourType>({
    id: 0,
    name: '',
    duration: 0,
    difficulty: '',
  });

  useEffect(() => {
    const fetchtours = async () => {
      const response = await fetch('http://localhost:3000/api/v1/tours');
      const toursAPI = await response.json();
      setTours(toursAPI.data?.tours);
    };

    fetchtours();
  }, []);

  const storeInputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setTour((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    console.log(JSON.stringify(tour));

    try {
      const response = await fetch('http://localhost:3000/api/v1/tours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tour),
      });

      const data = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        <input
          name='id'
          type='number'
          value={tour.id}
          onChange={storeInputsHandler}
        />
        <input
          name='name'
          type='text'
          value={tour.name}
          onChange={storeInputsHandler}
        />
        <input
          name='duration'
          type='number'
          value={tour.duration}
          onChange={storeInputsHandler}
        />
        <input
          name='difficulty'
          type='text'
          value={tour.difficulty}
          onChange={storeInputsHandler}
        />
        <button type='submit' onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
