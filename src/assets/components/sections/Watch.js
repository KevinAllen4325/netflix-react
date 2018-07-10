import React from 'react';
import Grid from './Grid';

class Watch extends React.Component{
    render() {
        return (
            <div className="sections watch-it-again">
                <p className="title">Watch It Again</p>
                <div className="grid">
                    {Object.keys(this.props.movies).reverse().map(key => {
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

export default Watch;