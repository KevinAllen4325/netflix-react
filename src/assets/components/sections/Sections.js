import React from 'react';
import Trending from './Trending';
import Popular from './Popular';
import NewReleases from './NewReleases';
import Watch from './Watch';
import movies from '../../../movies';
import {moveBack} from "../../../Helpers";
import {moveForward} from "../../../Helpers";

class Sections extends React.Component{
    state = {
        movies
    };

    sendBack = (p) => {
        moveBack(p)
    }

    sendForward = (p) => {
        moveForward(p)
    }

    render() {
        const trending = 'trending';
        const popular = 'popular';
        const newReleases = 'new-releases';
        const watchAgain = 'watch-it-again';
        return(
            <div className="movie-container">
                <div className="movie-sections">
                    <div className="section">
                        <i className="fa fa-chevron-left back-arrow" onClick={(e) => this.sendBack(trending)}/>
                        <i className="fa fa-chevron-right forward-arrow" onClick={(e) => this.sendForward(trending)}/>
                        <Trending movies={this.state.movies}/>
                    </div>
                    <div className="section">
                        <i className="fa fa-chevron-left back-arrow" onClick={(e) => this.sendBack(popular)}/>
                        <i className="fa fa-chevron-right forward-arrow" onClick={(e) => this.sendForward(popular)}/>
                        <Popular movies={this.state.movies}/>
                    </div>
                    <div className="section">
                        <i className="fa fa-chevron-left back-arrow" onClick={(e) => this.sendBack(newReleases)}/>
                        <i className="fa fa-chevron-right forward-arrow" onClick={(e) => this.sendForward(newReleases)}/>
                        <NewReleases movies={this.state.movies}/>
                    </div>
                    <div className="section">
                        <i className="fa fa-chevron-left back-arrow" onClick={(e) => this.sendBack(watchAgain)}/>
                        <i className="fa fa-chevron-right forward-arrow" onClick={(e) => this.sendForward(watchAgain)}/>
                        <Watch movies={this.state.movies}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sections;