import '../App.css';
import React, { Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Fragment>
            <nav>
                <div className="nav-left">
                    <MenuIcon className="nav-menuIcon" />
                    <h1 className="nav-title"><Link to="/" className="nav-link">News Lab</Link></h1>
                    <ul className="nav-list">
                        <Link to="/" className="nav-link"><li className="nav-item">Home</li></Link>
                        <Link to="/news" className="nav-link"><li className="nav-item">News</li></Link>
                        <Link to="/about" className="nav-link"><li className="nav-item">About</li></Link>
                        <Link to="/contact" className="nav-link"><li className="nav-item">Contact</li></Link>
                    </ul>
                </div>
                <div className="nav-right">
                    <p className="nav-right-item">Login</p>
                    <button className="nav-right-item">Subscribe</button>
                </div>
            </nav>

        </Fragment >
    );
}

export default Navbar;