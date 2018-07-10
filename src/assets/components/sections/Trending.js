import React from 'react';
import Grid from './Grid';

class Trending extends React.Component{
    render() {
        return (
            <div className="sections trending">
                <p className="title">Trending Now</p>
                <div className="grid">
                    {Object.keys(this.props.movies).map(key => {
                        return (
                            <Grid key={key}
                                  details={this.props.movies[key]}
                                  index={key}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Trending;