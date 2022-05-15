import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/Home';
import SecondPageScreen from './screens/SecondPage';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="2" element={<SecondPageScreen />} />
      </Routes>
    </>
  );
};

export default App;
