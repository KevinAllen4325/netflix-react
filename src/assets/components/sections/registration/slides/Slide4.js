import React from 'react';
import Checkmark from '../../../../img/checkmark.png';
import {Link} from 'react-router-dom';

class Slide4 extends React.Component{
    email = React.createRef();
    password = React.createRef();

    render(){
        const name = this.props.name;
        const plan = this.props.plan;
        return (
            <div className='slide1 slide4'>
                <p className="headline">Congratulations, <span className="red">{name}</span>!<br />
                    You've registered for the <span className="red">{plan}</span> plan, <br />
                    but don't worry, we wont charge you until your trials up.
                </p>

                <Link to="/netflix-react/" className="seePlans continue">START BROWSING</Link>

            </div>
        )
    }
}

export default Slide4;