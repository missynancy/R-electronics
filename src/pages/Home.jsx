import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import data from '../assets/data/FeaturesData';
import { Background } from '../components/hero/Background';
// import { Latest } from '../Latest/Latest';
import { Hero } from '../components/hero/Hero';
import { Latest } from './Latest/Latest';
import { New } from './New';
import img1 from '/images/phones-removebg-preview.png';
import img2 from '/images/laptops-removebg-preview.png';
import img3 from '/images/desktops-removebg-preview.png';
import img4 from '/images/monitor-removebg-preview.png';
import img5 from '/images/ups-removebg-preview.png';
import img6 from '/images/CA-removebg-preview.png';
import img7 from '/images/PA-removebg-preview.png';
import img8 from '/images/tv-removebg-preview.png';
import img9 from '/images/printers-removebg-preview.png';
import { Shop } from './shop/Shop';




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
const [selectedFeature, setSelectedFeature] = useState(null);

const handleSelection = (id) => {
  setSelectedFeature(selectedFeature === id ? null : id);
};
 let heroData = [
   {text: "Phones",},
   {text: "Laptops"},
   {text: "Desktops"},
   {text: "Monitors"},
  {text: "UPS/power backup"},
  {text: "Computer Accessories"},
  {text: "Phones Accessories"},
  {text: "Tv $ Entertainments"},
  {text: "Printers, Scanners $ Copiers"},
 ]

 const [heroCount, setHeroCount] = useState(0);
//  const[latestPlay, setLatest] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setHeroCount((count) => (count === 8 ? 0 : count + 1));
  }, 3000);

  return () => clearInterval(interval);
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
      <div className="landing-page">
        <div className="home">
          <>
          <div className="backcircle"></div>
          <Background heroCount={heroCount}/> 
          <Hero 
          heroData = {heroData[heroCount]}
          heroCount = {heroCount} 
          setHeroCount = {setHeroCount}
          
            />
          </>
          
          
        </div>
        <div className="home-links">
          <div className="links-1">
            <div className="links-1-2-1">
              <img src={img1} />
              <div className="link-1-content">
                <h3>Phones</h3>
                <Link to='/converse'>Shop more</Link>
              </div>
            </div>
            <div className="links-1-2-1">
              <img src={img2} />
              <div className="link-1-content">
                <h3>Laptops</h3>
                <Link to='/converse'>Shop more</Link>
              </div>
            </div>
            <div className="links-1-2-1">
              <img src={img3} />
              <div className="link-1-content">
                <h3>Desktops</h3>
                <Link to='/converse'>Shop more</Link>
              </div>
            </div>
            <div className="links-1-2-1">
              <img src={img4} />
              <div className="link-1-content">
                <h3>Monitors</h3>
                <Link to='/converse'>Shop more</Link>
              </div>
            </div>
          </div>
          <div className="links-1-2">
            <div className="links-1-2-2">
              <img src={img5} />
              <div className="link-1-content">
                <h3>UPS/Power backup</h3>
                <Link to='/converse'>Shop more</Link>
              </div>
            </div>
            <div className="links-1-2-2">
              <img src={img6} />
              <div className="link-1-content">
                <h3>Computer Accessories</h3>
                <Link to='/converse'>Shop more</Link>
              </div>
            </div>
            <div className="links-1-2-2">
              <img src={img7} />
              <div className="link-1-content">
                <h3>Phone Accessories</h3>
                <Link to='/converse'>Shop more</Link>
              </div>
            </div>
            <div className="links-1-2-2">
              <img src={img8} />
              <div className="link-1-content">
                <h3>TV $ Entertainment</h3>
                <Link to='/converse'>Shop more</Link>
              </div>
            </div>
            <div className="links-1-2-2">
              <img src={img9} />
              <div className="link-1-content">
                <h3>Printer, Scanners $ Copiers</h3>
                <Link to='/converse'>Shop more</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='features'>
          <h1>Features</h1>
          <div className='features-container'>
            {
              data && data.length > 0 ? 
              data.map(dataItem => (
                <div key={dataItem.id} className='items'>
                  <div id='deliveries'
                    style={{
                      fontSize: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '10px 20px',
                    }}
                    onClick={() => handleSelection(dataItem.id)}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <h3>{dataItem.icon}</h3>
                      <i className='bx bx-chevron-right'></i>
                    </div>
                  </div>
                  {
                    selectedFeature === dataItem.id ? 
                    <div>{dataItem.content}</div>
                    : null
                  }
                </div>
              ))
              : (<div>No data present</div>)
            }
          </div>
        </div>
        < Shop  className='h-shop'/>
      
      </div>  
    </>
  );
};
