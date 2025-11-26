import { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import MovieList from '../Movie-list/Movie-list';
import MovieAddForm from '../Movies-add-form/Movies-add-form';
import Search from '../Search/Search';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import User from '../hooks/UserHook';
import { AppContext } from '../../Context/context';

function App() {
  
  const [isloading, setIsloading] = useState(true);
  const {stat, dispatch} = useContext(AppContext)
  
  const allMoviesCount = stat.data.length;
  const favoriteMoviesCount = stat.data.filter(item => item.favorite).length;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setIsloading(true);
        const newMovies = data.slice(15, 25).map(post => ({
          id: uuidv4(),
          name: post.title,
          views: Math.floor(Math.random() * 2000),
          favorite: false,
          like: false,
        }));
        dispatch( {type: 'GET_DATA', payload: newMovies});
    })
      .catch(error => console.error("Error fetching data:", error))
      .finally(() => setIsloading(false));
  }, [dispatch]);
  

  return (
    <div className="app font-monospace mb-4">
      <Header allMoviesCount={allMoviesCount} favoriteMoviesCount={favoriteMoviesCount} />
      <Search />
      {isloading ? <div className="spinner-border mt-4 w-24" role="status">
                      <span className="sr-only">Loading...</span>
                    </div> :
      <MovieList />
      }
      <MovieAddForm />
      <User />
    </div>
  );
}

export default App;
