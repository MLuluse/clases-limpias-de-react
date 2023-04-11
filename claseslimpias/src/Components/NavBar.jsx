import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../storeContext/cartContext";


function NavBar() {
  const { cart } =useContext(cartContext);
    return (
      <nav>
        <ul>
          <Link to="/">
              <h1>Logo</h1>
          </Link>
        
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/Drama">Drama</Link>
          </li>
          <li>
            <Link to="/category/Comedy">Comedia</Link>
          </li>
          <li>
            <a href="http://coderhouse.com">Coder</a>
          </li>
          {/* CartWidget*/}
          <div>
            🛒
            <span className="cartWidget_count">{cart.length}</span>
          </div>
        </ul>
      </nav>
    );
  }

  export default NavBar;
  