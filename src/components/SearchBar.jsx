import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
        <input type="search" className="search-bar__form-search" id="busqueda" />
        <input type="submit" className="search-bar__form-submit" value="Buscar" />
      </form>
      <div className="search-bar__carrito-container">
        <Link to="carrito">
          <img
          className="search-bar__carrito-img"
          src="/img/carrito-de-compras.png"
          alt=""
          
          />
        </Link>
      </div>
              <div className="search-bar__menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div> 
  );
};

export default SearchBar;
