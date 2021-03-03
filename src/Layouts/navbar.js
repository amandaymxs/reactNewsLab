import '../App.css';
import '../index.css';
import React, { Component, Fragment } from 'react';
import { Box, Button } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav>
                    <div className="nav-left">
                        <MenuRoundedIcon className="nav-menuIcon" fontSize="large" />
                        <h1 className="nav-title"><Link to="/" className="nav-link">News Lab</Link></h1>
                        <ul className="nav-list">
                            <Link to="/" className="nav-link"><li className="nav-item">Home</li></Link>
                            <Link to="/news" className="nav-link"><li className="nav-item">News</li></Link>
                            <Link to="/about" className="nav-link"><li className="nav-item">About</li></Link>
                            <Link to="/contact" className="nav-link"><li className="nav-item">Contact</li></Link>
                        </ul>
                    </div>
                    <Box display="flex" className="nav-right" flexWrap="nowrap" flexDirection="column">
                        <Box>
                            <p className="nav-time" >{new Date().toDateString()} {new Date().toTimeString()}</p>
                        </Box>
                        <Box display="flex" className="nav-right" flexWrap="nowrap" flexDirection="row" justifyContent="flex-end">
                            <p className="nav-right-item">Login</p>
                            <Button variant="contained" size="medium">Subscribe</Button>
                        </Box>
                    </Box>
                </nav>

            </Fragment >
        );
    }
}
export default Navbar;