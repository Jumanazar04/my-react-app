
import { useContext } from "react";
import MovieListItem from "./Movie-list-item/Movie-list-item";
import { AppContext } from "../../Context/context";

function MovieList() {

  const {stat, dispatch} = useContext(AppContext)
  console.log(dispatch);
  


  return (
    <ul className='movie-list list-group'>
      {stat.data.map(item => (
        <MovieListItem
          key={item.id}
          {...item}
        
        />
      ))}
    </ul>
  );
}

export default MovieList;
