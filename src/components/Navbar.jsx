import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Header } from './Header';
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
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <Header/>
        </nav>
    );
}
