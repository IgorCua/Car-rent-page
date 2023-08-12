// import logo from './logo.svg';
import { Routes, Route } from 'react-router';
import './App.css';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { Favorites } from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
