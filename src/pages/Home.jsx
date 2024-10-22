import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';




export const Home = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
  fetch('api/all/products', {
    headers: {
      'Cache-Control': 'no-cache',  // Add this header to bypass the cache
    },
  })
    .then((res) => res.json())
    .then((data) => setItems(data.items))
    .catch((error) => console.error('Fetch error:', error));
}, []);


  return (
    <>
        <br/>
        <br/>
        <br/>
        <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>      
    </>
  );
};
