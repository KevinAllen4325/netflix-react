import React from 'react';
import {Link} from 'react-router-dom';

class Slide3 extends React.Component{
    constructor(props){
        super(props);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
    }

    submitForm = (e) =>{
        e.preventDefault();

        // const info = {
        //     firstName: this.firstName.value.value,
        //     lastName: this.lastName.value.value,
        //     email: this.email.value.value,
        //     password: this.password.value.value,
        // };

        // this.props.accountInfo(info);
        // console.log(info);
        this.props.nextStep();

    };
    render(){
        return (
            <div className='slide1 slide3'>
                <p className="steps">STEP <strong>3</strong> OF <strong>3</strong></p>
                <p className="headline">Sign up to start your free month</p>
                <p className="dl"><strong>Create your Account</strong></p>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="firstName" placeholder="First Name" ref={this.firstName}  required/>
                    <input type="text" name="lastName" placeholder="Last Name" ref={this.lastName}  required/>
                    <input type="email" name="email" placeholder="Email" ref={this.email}  required/>
                    <input type="password" name="password" placeholder="Password" ref={this.password} required/>
                    <button type="submit" className="seePlans continue">CONFIRM</button>
                </form>
            </div>
        )
    }
}

export default Slide3;