import React from 'react';
import Checkmark from '../../../../img/checkmark.png';
import {Link} from 'react-router-dom';

class Slide1 extends React.Component{

    render(){
        return (
            <div className='slide1'>
                <img src={Checkmark} />
                <p className="steps">STEP <strong>1</strong> OF <strong>3</strong></p>
                <p className="headline">Choose Your Plan.</p>
                <p className="dl">Choose from any of our three plans,<br />and you won't be charged until after<br /> your free month ends.</p>
                <button className="seePlans" onClick={this.props.nextStep}>SEE THE PLANS</button>
            </div>
        )
    }
}

export default Slide1;