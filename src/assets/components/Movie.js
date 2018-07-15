import React from 'react';

class Movie extends React.Component{

    render() {
        const {title, duration, userRating, desc, stars, genre, poster} = this.props.location.state.movieProps;

        return (
            <div className="movie">
                <img src={poster} alt={`${title} Poster`}/>
                <div className="movieInfo">
                    <h1>{title}</h1>
                    <p><strong>Rating: </strong>{userRating}</p>
                    <p><strong>Duration: </strong>{duration}</p>
                    <p><strong>Stars: </strong>{stars}</p>
                    <p><strong>genre: </strong>{genre}</p>
                    <p><strong>Overview: </strong>{desc}</p>
                </div>
            </div>
        )
    }
}

export default Movie;