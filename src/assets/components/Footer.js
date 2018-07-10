import React from 'react';
import Logo from '../img/Netflix-logo.png';

class Footer extends React.Component{
    render() {
        return (
            <footer>
                <img src={Logo} />
                <p>©2018. All Rights Reserved</p>
                <a href="https://github.com/KevinAllen4325/netflix-react" target="_blank">Github</a>
            </footer>
        )
    }
}

export default Footer;