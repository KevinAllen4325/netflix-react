import React from 'react';
import Interstellar from '../../img/carousel/intertellar.jpg';

class First extends React.Component{
    render() {
        const interstellar = {
            background: `url(${Interstellar})`
        };
        return(
            <div className="carousel-item" >
                <div className="box-left"></div>
                <div className="movie-image" style={interstellar}></div>
                <div className="title-info">
                    <h2>Interstellar</h2>
                    <h3>96% Match 2014 PG-13</h3>
                    <p className="overview">With Humanity Teetering on the bring of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.</p>

                    <div className="up-down">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>

                    </div>

                    <p className="overview">Starring:
                        <span className="hover"> Mathew McConaughey</span>,
                        <span className="hover"> Anne Hathaway</span>,
                        <span className="hover"> Jessica Chastain</span>
                    </p>

                    <p className="overview">Genre:
                        <span className="hover"> Sci-fi</span>,
                        <span className="hover"> Fantasy</span>,
                        <span className="hover"> Mystery</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default First;