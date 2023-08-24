// import logo from './logo.svg';
import { Routes, Route } from 'react-router';
import './App.css';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { Favorites } from './components/Favorites';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Filter } from './components/Filter/Filter';
// import { Selector } from './components/selector/Selector';

const cardArr = [
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
  {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'}
]

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='catalog' element={<Header/>}>
          <Route index element={<Catalog cardArr={cardArr}/>}></Route>
        </Route>
        <Route path='favorites' element={<Header/>}>
          <Route index element={<Favorites/>}/>
        </Route>

        <Route path='*' element={<Home/>}></Route>
      </Routes>
  );
}

export default App;
