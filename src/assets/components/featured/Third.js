import React from 'react';
import Stargate from '../../img/carousel/stargate.jpg';

class Third extends React.Component{
    render() {
        const stargate = {
            background: `url(${Stargate})`
        };
        return(
            <div className="carousel-item" style={stargate}>
                <div className="box-left"></div>
                <div className="movie-image" style={stargate}></div>
                <div className="title-info">
                    <h2>Stargate Universe</h2>
                    <h3>99% Match 2009-2011 2 Seasons</h3>
                    <p className="overview">Trapped on an Ancient spaceship billions of light-years from home, a group of soldiers and civilians struggle to survive and find their way back to Earth.</p>

                    <div className="up-down">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>

                    </div>

                    <p className="overview">Starring:
                        <span className="hover"> Robert Carlyle</span>,
                        <span className="hover"> Louis Ferreira</span>,
                        <span className="hover"> Brian J. Smith</span>
                    </p>

                    <p className="overview">Genre:
                        <span className="hover">Sci-fi</span>,
                        <span className="hover">Fantasy</span>,
                        <span className="hover">Drama</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Third;