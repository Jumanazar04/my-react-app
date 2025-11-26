
import { useContext } from "react";
import MovieListItem from "./Movie-list-item/Movie-list-item";
import { AppContext } from "../../Context/context";
import { filterMovies, searchHandler } from "../Utilities/data";

function MovieList() {

  const { stat } = useContext(AppContext)
  const data = filterMovies(searchHandler(stat.data, stat.term), stat.filter)
  
  return (
    <ul className='movie-list list-group'>
      {data.map(item => (
        <MovieListItem
          key={item.id}
          {...item}
        
        />
      ))}
    </ul>
  );
}

export default MovieList;
