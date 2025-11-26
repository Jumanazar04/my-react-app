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

function searchHandler(items, term){
    if(term.length === 0){
      return items;
    }
    return items.filter(item => item.name.toLowerCase().indexOf(term) > -1 )
  }

  export {filterMovies, searchHandler}