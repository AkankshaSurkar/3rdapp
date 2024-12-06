import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='Navbar'>

            <ul>
            <li><Link to="/home">Home</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/contact">Contact</Link> </li>
            <li><Link to="/blog">Blog</Link> </li>
            <li><Link to="/gallary">Gallary</Link> </li>

            </ul>

        </div>

        )
}
export default Navbar;