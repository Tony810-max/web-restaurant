import { BrowserRouter, Route, Routes } from 'react-router-dom';

// css
import './global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'aos/dist/aos.css';
// pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import Aos from 'aos';

function App() {
  Aos.init();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
