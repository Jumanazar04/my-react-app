import MovieListItem from "./Movie-list-item/Movie-list-item";

function MovieList({ data1, onDelete, onToggleProp }) {


  return (
    <ul className='movie-list list-group'>
      {data1.map(item => (
        <MovieListItem
          key={item.id}
          name={item.name}
          views={item.views}
          favorite={item.favorite}
          like={item.like}
          onDelete={() => onDelete(item.id)}
          onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </ul>
  );
}

export default MovieList;
