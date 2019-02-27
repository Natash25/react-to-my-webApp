import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header>
                <h1>NATASHA CARSON</h1>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="aboutMe">ABOUT ME</Link></li>
                    <li className="navButton"><Link to="">TECHNICAL SKILLS</Link></li>
                    <li className="navButton"><Link to="">PROJECTS</Link></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;