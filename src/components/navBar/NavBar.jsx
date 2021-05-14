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

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        {/* logo in a link to be redirect to home page */}
                        <Link to="/" className="logo-link">
                            <div className="logo">
                                <span>Beach</span>
                                <span>Resort</span>
                            </div>
                        </Link>

                        {/* the icon in order to use handleToggle */}
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>

                    {/* pages */}
                    <div className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <Link to="/">Home</Link>
                        <Link to="/rooms">Rooms</Link>
                        <Link to="/contact">Contact</Link>

                        {/* languages */}
                        <div className="language">
                            <select>
                                <option value="en">EN</option>
                                <option value="de">DE</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}


// export default function NavBar() {
//     return (
//         <nav className="nav">
//             <div className="container">
//                 <div className="logo">
//                     <span>Beach</span>
//                     <span>Resort</span>
//                 </div>
//                 <Link to="/">Home</Link>
//                 <Link to="/rooms">Rooms</Link>
//                 <Link to="/contact">Contact</Link>
//             </div>
//             <div className="language">
//                 <select>
//                     <option value="en">EN</option>
//                     <option value="de">DE</option>
//                 </select>
//             </div>
//         </nav>
//     )
// }
