import React from 'react';
import Logo from '../img/Netflix-logo.png';
import {Link} from 'react-router-dom';
import Router from './Routes';

class Header extends React.Component{
    render(){
        return (
          <div className="header">
              <Link to="/">
                  <img src={Logo} alt='Netflix Logo'/>
              </Link>
              <nav>
                  <ul>
                      <li><strong>Home</strong></li>
                      <li>TV Shows</li>
                      <li>Movies</li>
                      <li>Originals</li>
                      <li>Recently Added</li>
                      <li>My List</li>
                  </ul>
              </nav>

          </div>
        );
    }
}

export default Header;