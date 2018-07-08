import React from 'react';

class Grid extends React.Component{
    render() {
        const {image, title, match, rating, duration, desc, Starring, genre} = this.props.details;
        return(
            <div className="grid-item">
                <div className="transform-me">
                    <img src={image} alt={title} />
                </div>
                <div className="movie-details">
                    <div className="grid-overlay"></div>
                    <p className="grid-title">{title}</p>
                    <p className="grid-sub">
                        <span className="green">{match} Match</span>
                        <span className="rate">{rating}</span>
                        <span className="duration">{duration}</span>
                    </p>
                </div>
            </div>
        )
    }
}
export default Grid;
