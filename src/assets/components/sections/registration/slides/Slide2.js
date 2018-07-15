import React from 'react';
import {Link} from 'react-router-dom';
import {plan} from "../../../../../Helpers";

class Slide2 extends React.Component{
    sendData = (e) => {
        plan(e)
    };

    checkPlan = e => {
        if(this.props.currentPlan === ''){
            alert('You must select a plan to continue.')
        } else{
            this.props.nextStep();
        }
    }

    render(){
        const basic = 'basic';
        const standard = 'standard';
        const premium = 'premium';

        return (
            <div className='slide2'>
                <p className="steps">STEP <strong>2</strong> OF <strong>3</strong></p>
                <p className="headline">Choose a plan that's right for you..</p>
                <p className="dl">Downgrade or upgrade at any time</p>
                <div className="planBoxes">
                    <div className="fillBox"></div>
                    <div className="items">
                        <div className="box box1 basic" onClick={(e) => {this.props.plan(basic); this.sendData(basic)}}>Basic</div>
                        <div className="box box2 standard" onClick={(e) => {this.props.plan(standard); this.sendData(standard)}}>Standard</div>
                        <div className="box box3 premium" onClick={(e) => {this.props.plan(premium); this.sendData(premium)}}>Premium</div>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Monthly price after free month ends</p>
                    <div className="items">
                        <p className="basic">$7.99</p>
                        <p className="standard">$10.99</p>
                        <p className="premium">$13.99</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">HD available</p>
                    <div className="items">
                        <p className="basic">No</p>
                        <p className="standard">Yes</p>
                        <p className="premium">Yes</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Ultra HD available</p>
                    <div className="items">
                        <p className="basic">No</p>
                        <p className="standard">No</p>
                        <p className="premium">Yes</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Screens you can watch on at the same time</p>
                    <div className="items">
                        <p className="basic">1</p>
                        <p className="standard">2</p>
                        <p className="premium">4</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Watch on your laptop, TV, phone and tablet</p>
                    <div className="items">
                        <p className="basic">Yes</p>
                        <p className="standard">Yes</p>
                        <p className="premium">Yes</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Unlimited movies and TV shoes</p>
                    <div className="items">
                        <p className="basic">Yes</p>
                        <p className="standard">Yes</p>
                        <p className="premium">Yes</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Cancel anytime</p>
                    <div className="items">
                        <p className="basic">Yes</p>
                        <p className="standard">Yes</p>
                        <p className="premium">Yes</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">First month free</p>
                    <div className="items">
                        <p className="basic">Yes</p>
                        <p className="standard">Yes</p>
                        <p className="premium">Yes</p>
                    </div>
                </div>
                <button className="seePlans continue" onClick={this.checkPlan}>CONTINUE</button>
            </div>
        )
    }
}

export default Slide2;