import React from 'react';
class Grid extends React.Component{

    render() {
        const {image, title, match, rating, duration, desc, Starring, genre} = this.props.details;
        const newTitle = title.replace(/[^A-Z0-9]/ig, "_");

        return(
            <a className={`grid-item ${newTitle}`}>
                <div className="grid-overlay"></div>
                <div className="transform-me">
                    <img src={image} alt={title} />
                </div>
                <div className="movie-details">

                    <p className="grid-title">{title}</p>
                    <p className="grid-sub">
                        <span className="green">{match} Match</span>
                        <span className="rate">{rating}</span>
                        <span className="duration">{duration}</span>
                    </p>
                </div>
            </a>
        )
    }
}
export default Grid;