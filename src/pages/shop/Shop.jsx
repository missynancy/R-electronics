import React from 'react'
import './Products.css'
import products from './Products.json'
import converse from './converseshop.json'
import { Link } from 'react-router-dom'
import official from './Shopofficial.json'
import heels from './heelshop.json'
import kids from './kidsShop.json'
import sandals from './sandalshop.json'



export const Shop = () => {
  
  return (
    <>
    
    <div className='shop shop-p'>

          <div className="shop-sneaker product-background margin" id="sneakers">
            <h1>Phones</h1>
            <Link to='/sneakers'>View All</Link>
            <div className="shop-content">
              {
                products && products.length ?
                products.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/sneaker/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker product-background margin" id="canva">
            <h1>Laptops</h1>
            <Link to='/converse'>View All</Link>
            <div className="shop-content">
              {
                converse && converse.length ?
                converse.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/converse/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker margin" id="heels">
            <h1>Desktop</h1>
            <Link to='/officials'>View All</Link>
            <div className="shop-content">
              {
                official && official.length ?
                official.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/formal/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker margin" id="heels">
            <h1>Monitors</h1>
            <Link to='/heels'>View All</Link>
            <div className="shop-content">
              {
                heels && heels.length ?
                heels.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/heels/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker margin" id="sandals">
            <h1>UPS</h1>
            <Link to='/sandals'>View All</Link>
            <div className="shop-content">
              {
                sandals && sandals.length ?
                sandals.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/sandals/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
            
          </div>
          <div className="shop-sneaker margin" id="kids">
            <h1>Computer Accessories</h1>
            <Link to='/kids'>View All</Link>
            <div className="shop-content">
              {
                kids && kids.length ?
                kids.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/kids/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker margin" id="kids">
            <h1>Phone Accessories</h1>
            <Link to='/kids'>View All</Link>
            <div className="shop-content">
              {
                kids && kids.length ?
                kids.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/kids/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker margin" id="kids">
            <h1>TV & Entertainment</h1>
            <Link to='/kids'>View All</Link>
            <div className="shop-content">
              {
                kids && kids.length ?
                kids.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/kids/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker margin" id="kids">
            <h1>Printers, Scanners & Computers</h1>
            <Link to='/kids'>View All</Link>
            <div className="shop-content">
              {
                kids && kids.length ?
                kids.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/kids/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
        
    </div>
  
    </>
  )
}
