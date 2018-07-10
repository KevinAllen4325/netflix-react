import React from 'react';
import { Redirect, Switch } from 'react-router-dom'
class NotFound extends React.Component{
    render(){
        return(
            <Redirect to="/netflix-react"/>
        )
    }
}

export default NotFound