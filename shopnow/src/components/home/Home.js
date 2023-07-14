import React from 'react';
import Slider from './Slider/Slider';
import Header from './Header/Header';
//import { homeCourseData } from '../utils/data';
import HomeProducts from './homeProducts/HomeProducts';
import Products from './homeProducts/Products';

const Home = () => {
    
    return (
        <div className=''>
          <Slider/>
          <HomeProducts />
          <Products/>
         
        </div>
    );
};

export default Home;