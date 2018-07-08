import React from 'react';
import Stepbrothers from '../../img/carousel/stepbrothers.jpg';

class Second extends React.Component{
    render() {
        const stepbrothers = {
            background: `url(${Stepbrothers})`
        };
        return(
            <div className="carousel-item" style={stepbrothers}>
                <div className="box-left"></div>
                <div className="movie-image" style={stepbrothers}></div>
                <div className="title-info">
                    <h2>Step Brothers</h2>
                    <h3>92% Match 2008 R</h3>
                    <p className="overview">Brennan and Dale might be grown men, but that doesn't stop a childish sibling rivalry from erupting after Brennan's mom marries Dale's dad.</p>

                    <div className="up-down">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                    </div>

                    <p className="overview">Starring:
                        <span className="hover"> Will Ferrell</span>,
                        <span className="hover"> John C. Reilly</span>,
                        <span className="hover"> Mary Steenburgen</span>
                    </p>

                    <p className="overview">Genre:
                        <span className="hover"> Comedy</span>,
                        <span className="hover"> Late Night Comedies</span>,
                        <span className="hover"> Slapstick Comedy</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Second;