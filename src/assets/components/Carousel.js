import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import First from './featured/First';
import Second from './featured/Second';
import Third from './featured/Third';

class MovieCarousel extends React.Component{
    render() {
        return(
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false} interval={5000} transitionTime={700}>
                <First />
                <Second />
                <Third />
            </Carousel>
        )
    }
}

export default MovieCarousel;