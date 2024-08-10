import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navebar from './Navebar';
import Home from './Components/Home';
import Preview from './Components/Preview';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navebar />}>
            <Route index element={<Home />} />
            <Route path='/preview/:postId' element={<Preview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
