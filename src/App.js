// import logo from './logo.svg';
import { Routes, Route } from 'react-router';
import './App.css';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { Favorites } from './components/Favorites';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Filter } from './components/Filter/Filter';
import { useState } from 'react';
// import { Selector } from './components/selector/Selector';

const cardArr = [
  {manufacturer: "Toyota", year: "2020", price: '$60', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Toyota", year: "2016", price: '$50', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Honda", year: "2021", price: '$65', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Honda", year: "2018", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "BMW", year: "2017", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "BMW", year: "2019", price: '$60', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Mercedes", year: "2022", price: '$70', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Mercedes", year: "2015", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Honda", year: "2017", price: '$50', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Toyota", year: "2014", price: '$40', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Aston Martin", year: "2020", price: '$100', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Bentley", year: "2021", price: '$90', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'},
  {manufacturer: "Land Rover", year: "2019", price: '$60', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system', country: 'Country'}
];

function App() {
  const [filterObj, setFilterObj] = useState({
    model: '',
    pricePerHour: '',
    proceFrom: '',
    priceTo: ''
  })
  // const filterObj2 = {
  //   model: '',
  //   pricePerHour: '',
  //   proceFrom: '',
  //   priceTo: ''
  // }

  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='catalog' element={<Header filterObj={filterObj} setFilterObj={setFilterObj}/>}>
          <Route index element={<Catalog cardArr={cardArr}/>}></Route>
        </Route>
        <Route path='favorites' element={<Header filterObj={filterObj} setFilterObj={setFilterObj}/>}>
          <Route index element={<Favorites/>}/>
        </Route>

        <Route path='*' element={<Home/>}></Route>
      </Routes>
  );
}

export default App;
