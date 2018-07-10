import React from 'react';

class Slide3 extends React.Component{
    firstName = React.createRef();
    lastName = React.createRef();
    email = React.createRef();
    password = React.createRef();

    submitForm = (e) =>{
        e.preventDefault();

        const info = {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            password: this.password.value,
        };

        this.props.account(info);
        this.props.nextStep();

    };
    render(){
        return (
            <div className='slide1 slide3'>
                <p className="steps">STEP <strong>3</strong> OF <strong>3</strong></p>
                <p className="headline">Sign up to start your free month</p>
                <p className="dl"><strong>Create your Account</strong></p>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="firstName" placeholder="First Name" ref={(input) => this.firstName = input}  required/>
                    <input type="text" name="lastName" placeholder="Last Name" ref={(input) => this.lastName = input}  required/>
                    <input type="email" name="email" placeholder="Email" ref={(input) => this.email = input}  required/>
                    <input type="password" name="password" placeholder="Password" ref={(input) => this.password = input} required/>
                    <button type="submit" className="seePlans continue">CONFIRM</button>
                </form>
            </div>
        )
    }
}

export default Slide3;