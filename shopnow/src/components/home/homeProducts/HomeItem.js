import React from 'react';
import 'tailwindcss/tailwind.css';

const HomeItem = ({ item }) => {
  return (
    <div className="flex-1 m-3 h-70vh relative">
      <img src={item.Img} className="w-full h-full object-cover" alt={item.title} />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="text-white font-bold text-3xl">{item.title}</div>
        <button className="rounded bg-slate-50 p-1 mt-2">SHOP NOW</button>
      </div>
    </div>
  );
};

export default HomeItem;
