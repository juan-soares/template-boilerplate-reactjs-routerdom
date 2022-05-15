import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <button>HOME</button>
            </Link>
          </li>
        </ul>
        <li>
          <Link to="/2">
            <button>2°</button>
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
