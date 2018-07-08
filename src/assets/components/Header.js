import React from 'react';
import Logo from '../img/Netflix-logo.png';

class Header extends React.Component{
    render(){
        return (
          <div className="header">
              <img src={Logo} alt='Netflix Logo'/>
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