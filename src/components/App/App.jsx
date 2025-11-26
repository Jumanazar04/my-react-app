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

  const [state, setState] = useState([
    {like: false, name: 'Empire of Osman', views: 988, favorite: true, id: 1 },
    {like: false, name: 'The Great Adventure', views: 1500, favorite: false, id: 2 },
    {like: false, name: 'Mystery Island', views: 750, favorite: true, id: 3 },
    {like: false, name: 'Space Odyssey', views: 1200, favorite: false, id: 4 },
    {like: false, name: 'Romance in Paris', views: 640, favorite: false, id: 5 },
    {like: false, name: 'The Last Kingdom', views: 2000, favorite: false, id: 6 },
    {like: false, name: 'Underwater World', views: 430, favorite: false, id: 7 },
    {like: false, name: 'Desert Storm', views: 1100, favorite: false, id: 8 },
    {like: false, name: 'Jungle Book', views: 980, favorite: false, id: 9 },
    {like: false, name: 'City Lights', views: 1750, favorite: false, id: 10 },
  ]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('');
  const [isloading, setIsloading] = useState(true);





  function searchHandler(items, term){
    if(term.length === 0){
      return items;
    }
    return items.filter(item => item.name.toLowerCase().indexOf(term) > -1 )
  }

  function onUpdateSearch(term){
    setTerm(term);
  }


  function filterMovies(items, filter){{
    switch(filter){
      case 'favorite':
        return items.filter(item => {
          return item.favorite});
      case 'mostViewed':
        return items.filter(item => item.views > 800);
      default:
        return items;
    }
  }}

  const visibleMovies = filterMovies(searchHandler(state, term), filter);

  const updatefilterHendler = (filter) => setFilter(filter);

  const {stat, dispatch} = useContext(AppContext)
  console.log(stat);
  
  const allMoviesCount = state.length;
  const favoriteMoviesCount = state.filter(item => item.favorite).length;

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
        setState(newMovies);
        dispatch( {type: 'GET_DATA', payload: newMovies});
    })
      .catch(error => console.error("Error fetching data:", error))
      .finally(() => setIsloading(false));
  }, [dispatch]);
  

  return (
    <div className="app font-monospace mb-4">
      <Header allMoviesCount={allMoviesCount} favoriteMoviesCount={favoriteMoviesCount} />
      <Search onUpdateSearch={onUpdateSearch} updatefilterHendler={updatefilterHendler} filter={filter} />
      {isloading ? <div className="spinner-border mt-4 w-24" role="status">
                      <span className="sr-only">Loading...</span>
                    </div> :
      <MovieList data1={visibleMovies}/>
      }
      <MovieAddForm />
      <User />
    </div>
  );
}

export default App;
