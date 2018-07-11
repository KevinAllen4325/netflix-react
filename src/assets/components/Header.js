import React from 'react';
import Logo from '../img/Netflix-logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
          <div className="header">
              <Link to="/netflix-react/">
                  <img src={Logo} alt='Netflix Logo'/>
              </Link>
              <nav>
                  <ul>
                      <li><Link to="/netflix-react/"><strong>Home</strong></Link></li>
                      <li><a>TV Shows</a></li>
                      <li><a>Movies</a></li>
                      <li><a>Originals</a></li>
                      <li><a>Recently Added</a></li>
                      <li><a>My List</a></li>
                      <li><Link to="/netflix-react/registration">Register</Link></li>
                  </ul>
              </nav>

          </div>
        );
    }
}

export default Header;