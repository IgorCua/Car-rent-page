// import logo from './logo.svg';
import { Routes, Route } from 'react-router';
import './App.css';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { Favorites } from './components/Favorites';
import { Header } from './components/Header/Header';
// import { Selector } from './components/selector/Selector';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Header/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='*' element={<Home/>}></Route>
      </Routes>
  );
}

export default App;
