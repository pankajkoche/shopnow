import React from 'react';
import 'tailwindcss/tailwind.css';
import HomeItem from './HomeItem';
import { homeProductsData } from '../../../staticData';

const HomeProducts = () => {
  return (
    <div className="flex-1 md:flex  gap-4 p-5 md:p-10">
      {homeProductsData.map((item) => (
        <HomeItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default HomeProducts;
