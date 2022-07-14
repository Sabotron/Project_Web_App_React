import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NoPage from '../pages/NoPage';
import Album from '../pages/Album';


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/album" element={<Album/>} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>

  );
}


export default App;
