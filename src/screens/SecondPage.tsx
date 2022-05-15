import { Link } from 'react-router-dom';

const SecondPageScreen = (): JSX.Element => {
  return (
    <>
      <h1>Página 2</h1>
      <Link to="/2/3">
        <button>Página 3</button>
      </Link>
    </>
  );
};

export default SecondPageScreen;
