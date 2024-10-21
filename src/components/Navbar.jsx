import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setOpenMenu] = useState(false);
    const [sideOpen, setSideOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Change useHistory to useNavigate

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Use navigate instead of history.push
            setSearchQuery(''); // Clear the search input
        }
    };

    return (
        <nav>
            <div className="nav1" id='nav1'>
                <NavLink to="/" className='title' id='title'>Electronics</NavLink>
                <form onSubmit={handleSearchSubmit} className="search-form">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                    <button type="submit">Search</button>
                </form>
                <div 
                    className='menu' 
                    onClick={() => setOpenMenu(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="nav2">
                <div 
                    className='menu2' 
                    onClick={() => setSideOpen(!sideOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={sideOpen ? "open" : ""}>
                    <li>
                    <NavLink to='/officials'>Phones<i className='bx bx-chevron-right'></i></NavLink>
                        <NavLink to='/sneakers'>Laptops <i className='bx bx-chevron-right'></i></NavLink>
                        <NavLink to='/officials'>Desktops<i className='bx bx-chevron-right'></i></NavLink>
                        <NavLink to='/officials'>Monitors<i className='bx bx-chevron-right'></i></NavLink>
                        <NavLink to='/officials'>UPS/Power backup<i className='bx bx-chevron-right'></i></NavLink>
                        <NavLink to='/heels'>Computer Accessories<i className='bx bx-chevron-right'></i></NavLink>
                        <NavLink to='/scandals'>Phone Accessories<i className='bx bx-chevron-right'></i></NavLink>
                        <NavLink to='/kids'>TV & Entertainment <i className='bx bx-chevron-right'></i></NavLink>
                        <NavLink to='/officials'>Printers, Scanners & Copiers<i className='bx bx-chevron-right'></i></NavLink>
                    </li>
                </ul>
                <div className="categories">
                    <li>
                        <NavLink to='/officials'>Phones</NavLink>
                        <NavLink to='/sneakers'>Laptops</NavLink>
                        <NavLink to='/officials'>Desktops</NavLink>
                        <NavLink to='/officials'>Monitors</NavLink>
                        <NavLink to='/officials'>UPS/Power backup</NavLink>
                        <NavLink to='/heels'>Computer Accessories</NavLink>
                        <NavLink to='/scandals'>Phone Accessories</NavLink>
                        <NavLink to='/kids'>TV & Entertainment</NavLink>
                        <NavLink to='/officials'>Printers, Scanners & Copiers</NavLink>
                    </li>
                </div>
                <div className={cartOpen ? "open" : ""} id='e-cart'>
                    <div className="carticon">
                        <NavLink to="cart" onClick={() => setCartOpen(!cartOpen)}>
                            <i id='cart' className='bx bx-cart-add'></i>
                            <span id='span' className='cartSpan'>0</span>
                        </NavLink>
                    </div>
                </div>
            </div> 
        </nav>
    );
}
