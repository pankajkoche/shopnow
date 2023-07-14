import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { homeProduct } from '../../../staticData';
import Product from './Product';

const Products = () => {
  return (
    <div className="p-5 flex flex-wrap justify-between">
      {homeProduct.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
