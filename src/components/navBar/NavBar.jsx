// importing React
import React, { Component } from "react";

// importing Link
import { Link } from "react-router-dom";

// importing react-icons
import { FaAlignRight } from "react-icons/fa";

// importing NavBar scss
import './NavBar.scss';

export default class NavBar extends Component {
    // setting up the state
    state = {
        isOpen: false,
    };

    // handleToggle
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };

    handleToggle2 = () => {
        this.setState({ isOpen: false })
    };

    // onScrolling 
    // bgColorChangeOnScrolling = () => {
    //     this.setState({ onScroll: this.state.onScroll })
    // };

    render() {
        return (
            // {<nav className={ this.state.onScroll ? 'main-navbar' : 'transparent-navbar'} onScroll={this.bgColorChangeOnScrolling}>}
            <nav className='navbar'>
                        {/* logo in a link to be redirect to home page */}
                        <div className={this.state.isOpen ? 'nav-small' : 'nav-container'}>
                            <div className="logo-div">
                            <Link to="/" className="logo-link">
                                <div className="logo">
                                    <span>Beach</span>
                                    <span>Resort</span>
                                </div>
                            </Link>
                            </div>
                            {/* pages */}

                            {/**<div className={this.state.isOpen ? 'nav-small' : 'nav-links'}>**/}
                            <div className='nav-links' onClick={this.handleToggle2}>
                                <Link to="/">Home</Link>
                                <Link to="/rooms">Rooms</Link>
                                <Link to="/contact">Contact</Link>
                                {/**<div className="languages">
                                    <select name="language-options">
                                        <option value="en">EN</option>
                                        <option value="de">DE</option>
                                    </select>
        </div>**/}
                            </div>
                        </div>

                        {/* the icon in order to use handleToggle */}
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
            </nav>
        )
    }
}

