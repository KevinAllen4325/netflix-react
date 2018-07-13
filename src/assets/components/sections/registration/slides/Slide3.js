import React from 'react';

class Slide3 extends React.Component{
    firstName = React.createRef();
    lastName = React.createRef();
    email = React.createRef();
    password = React.createRef();

    validateEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    submitForm = (e) =>{
        e.preventDefault();
        let error = [];
        const info = {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            password: this.password.value,
        };


        if(info.firstName.length < 3){
            error.push('\nFirst name must be at least 3 characters')
        }

        if(info.lastName.length < 3){
            error.push('\nLast name must be at least 3 characters')
        }

        if(!this.validateEmail(info.email)){
            error.push('\nInvalid email address')
        }

        if(info.password.length < 6){
            error.push('\nPassword must be at least 6 characters')
        }

        if(error.length !== 0)
            alert(error);
        else{
            this.props.account(info);
            this.props.nextStep();
        }

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