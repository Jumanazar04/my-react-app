import './header.css'

function Header({ allMoviesCount, favoriteMoviesCount }) {
  return (
    <div className="header">
        <div className='title_1'>
            <h1 className='fs-4'>BARCHA KINOLAR SONI:  {allMoviesCount}</h1>
        </div>
        <div className='title_2'>
            <h2 className='fs-5 upper-case'>Sevimli filmar soni: {favoriteMoviesCount}</h2>
        </div>
    </div>
  );
}

export default Header;